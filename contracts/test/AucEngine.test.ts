import {expect} from 'chai'
import { ethers } from 'hardhat'
import type {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers'
import type {AucEngine} from '../typechain-types'

describe("AuctionEngine", () => {
    let owner: SignerWithAddress
    let seller: SignerWithAddress
    let buyer: SignerWithAddress
    let auction: AucEngine

    beforeEach(async () => {
        [owner, seller, buyer] = await ethers.getSigners()

        const AucEngine = await ethers.getContractFactory("AucEngine", owner)
        auction = await AucEngine.deploy()
        await auction.deployed()
    })

    it("sets owner", async () => {
        const currentOwner = await auction.owner()
        expect(currentOwner).to.eq(owner.address)
    })

    const getTimestamp  = async (bn:number): Promise<number> =>  {
        const block  = await ethers.provider.getBlock(bn)
        return block.timestamp
    }

    describe("createAuction", () => {
        it("creates auction correctly", async () => {
            const duration = 60
            const tx = await auction.createAuction(
                ethers.utils.parseEther("0.0001"),
                3,
                "test item",
                duration
            )
            const cAuction = await auction.auctions(0)
            console.log(cAuction)
            expect(cAuction.item).to.eq("test item")
            expect(cAuction.startingPrice).to.eq("100000000000000")
            expect(cAuction.stopped).to.be.false
            expect(cAuction.endsAt.sub(cAuction.startAt)).to.eq(duration)
            const ts = await getTimestamp(tx.blockNumber ? tx.blockNumber : 0)
            expect(cAuction.endsAt).to.eq(ts + duration)

        })
    })

    const delay = (ms:number) => new Promise(res => setTimeout(res, ms))

    describe("buy", () => {
        it("allows to buy", async function () {
            const duration = 60
            const fee = 10
            const tx = await auction.connect(seller).createAuction(
                ethers.utils.parseEther("0.0001"),
                3,
                "test item",
                duration
            )
            this.timeout(5000);
            await delay(1000)
            const buyTx = await auction.connect(buyer)
                .buy(0, {value: ethers.utils.parseEther("0.0001")})
            const cAuction = await auction.auctions(0)
            const first = cAuction.finalPrice.mul(fee) // price*10
            const second = first.div(100) // (price*10) / 100 = 10%
            const finalPrice = cAuction.finalPrice.sub(second) // price - 10%
            await expect(() => buyTx)
                .to.changeEtherBalance(
                    seller, 
                    finalPrice
                )
            await expect(buyTx)
                    .to.emit(auction, 'AuctionEnded')
                    .withArgs(0, cAuction.finalPrice, buyer.address)

            await expect(
                auction.connect(buyer)
                .buy(0, {value: ethers.utils.parseEther("0.0001")})
                ).to.be.revertedWith('stopped!')
                    
        })
    })
})