import { ethers } from 'ethers';
import { errorMessage } from './../../utils/messsage-utils';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { IWallet } from './types';



const ehtProvider = window.ethereum

const connect = createAsyncThunk('wallet/connect', async () => {
    try {
        const [address] = await ehtProvider.request({ method: 'eth_requestAccounts' }) as string[]
        return address
    } catch (error: any) {
        errorMessage(error.message)
    }
})

const initialize = createAsyncThunk('wallet/inittialize', async (param, {dispatch}) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        return provider
    } catch (error: any) {
        await errorMessage(error.message)
    }
} 
    ) 
        // this._provider = new ethers.providers.Web3Provider(window.ethereum)
    
        // this._auction = new ethers.Contract(
        //   auctionAddress.DutchAuction,
        //   auctionArtifact.abi,
        //   this._provider.getSigner(0)
        // )
    
        // this.setState({
        //   selectedAccount: selectedAddress
        // }, async () => {
        //   await this.updateBalance()
        // })
      


// import { ConnectWallet } from '../components/ConnectWallet'

// import auctionAddress from '../contracts/DutchAuction-contract-address.json'
// import auctionArtifact from '../contracts/DutchAuction.json'

// export default class extends Component {
//   constructor(props) {
//     super(props)

//     this.initialState = {
//       selectedAccount: null,
//       txBeingSent: null,
//       networkError: null,
//       transactionError: null,
//       balance: null,
//     }

//     this.state = this.initialState
//   }

//   _connectWallet = async () => {
//     if(window.ethereum === undefined) {
//       this.setState({
//         networkError: 'Please install Metamask!'
//       })
//       return
//     }

//     const [selectedAddress] = await window.ethereum.request({
//       method: 'eth_requestAccounts'
//     })

//     if(!this._checkNetwork()) { return }

//     this._initialize(selectedAddress)

//     window.ethereum.on('accountsChanged', ([newAddress]) => {
//       if(newAddress === undefined) {
//         return this._resetState()
//       }

//       this._initialize(newAddress)
//     })

//     window.ethereum.on('chainChanged', ([networkId]) => {
//       this._resetState()
//     })
//   }

//   async _initialize(selectedAddress) {
//     this._provider = new ethers.providers.Web3Provider(window.ethereum)

//     this._auction = new ethers.Contract(
//       auctionAddress.DutchAuction,
//       auctionArtifact.abi,
//       this._provider.getSigner(0)
//     )

//     this.setState({
//       selectedAccount: selectedAddress
//     }, async () => {
//       await this.updateBalance()
//     })
//   }

//   async updateBalance() {
//     const newBalance = (await this._provider.getBalance(
//       this.state.selectedAccount
//     )).toString()

//     this.setState({
//       balance: newBalance
//     })
//   }

//   _resetState() {
//     this.setState(this.initialState)
//   }

//   _checkNetwork() {
//     if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) { return true }

//     this.setState({
//       networkError: 'Please connect to localhost:8545'
//     })

//     return false
//   }

//   _dismissNetworkError = () => {
//     this.setState({
//       networkError: null
//     })
//   }

//   render() {
//     if(!this.state.selectedAccount) {
//       return <ConnectWallet
//         connectWallet={this._connectWallet}
//         networkError={this.state.networkError}
//         dismiss={this._dismissNetworkError}
//       />
//     }

//     return(
//       <>
//         {this.state.balance &&
//           <p>Your balance: {ethers.utils.formatEther(this.state.balance)} ETH</p>}
//       </>
//     )
//   }
// }


export const asyncActions = {
    connect
} 

const initialState: IWallet  = {
        wallet: '',
        balance: '',
        signer: null,
        chainId: '',
        initMetamaskExtension: false,
        metamaskExtensionError: '',
        networkError: '',
        transactionError: ''
}

export const slice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setMetamaskError(state, action: PayloadAction<{error: string}>) {
            state.metamaskExtensionError = action.payload.error
            state.initMetamaskExtension = false
            errorMessage(action.payload.error)
        },
        setInitMatamask(state) {
            state.initMetamaskExtension = true
        }
    },
    extraReducers: builder => {
        builder.addCase(connect.fulfilled, (state, action) => {
            if(action.payload)
            state.wallet = action.payload  
        }) 
    }
})