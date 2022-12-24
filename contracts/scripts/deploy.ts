import hre from 'hardhat';
import fs from 'fs';
import path from 'path';


const ethers = hre.ethers;

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying with", await deployer.getAddress())

  const DutchAuction = await ethers.getContractFactory("DutchAuction", deployer)
  
  // deploying contract
  const auction = await DutchAuction.deploy(
    ethers.utils.parseEther('0.1'),
    1,
    "Bike"
  )
  
  await auction.deployed()

  // creating folder contracts in frontend (features/Solidity)
  saveFrontendFiles({DutchAuction: auction})
}

function saveFrontendFiles(contracts) {
  const contractsDir = path.join(__dirname, '../../src/', 'features/Solidity/contracts')

  if(!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir)
  }

  Object.entries(contracts).forEach((contract_item) => {
    console.log(contract_item)
    const [name, contract] = contract_item

    if(contract) {
      fs.writeFileSync(
        path.join(contractsDir, '/', name + '-contract-address.json'),
        JSON.stringify({[name]: contract.address}, undefined, 2)
      )
    }

    const ContractArtifact = hre.artifacts.readArtifactSync(name)

    fs.writeFileSync(
      path.join(contractsDir, '/', name + ".json"),
      JSON.stringify(ContractArtifact, null, 2)
    )
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
