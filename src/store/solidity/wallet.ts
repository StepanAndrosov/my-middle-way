import { ethers } from 'ethers';
import { errorMessage } from './../../utils/messsage-utils';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { IWallet } from './types';

const ehtProvider = window.ethereum

const connect = createAsyncThunk('wallet/connect', async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
        const [address] = await ehtProvider.request({ method: 'eth_requestAccounts' }) as string[]
        const balance = (await provider.getBalance(address)).toString()
        
        return {address, balance}
    } catch (error: any) {
        errorMessage(error.message)
    }
})

const updateBalance = createAsyncThunk('wallet/updateBalance', async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const [address] = await ehtProvider.request({ method: 'eth_requestAccounts' }) as string[]
    try {
        const balance = (await provider.getBalance(address)).toString()
        
        return { balance}
    } catch (error: any) {
        errorMessage(error.message)
    }
})

export const asyncActions = {
    connect,
    updateBalance
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
            if(action.payload) {
                state.wallet = action.payload.address 
                state.balance = action.payload.balance
            }          
        })
        builder.addCase(updateBalance.fulfilled, (state, action) => {
            if(action.payload) {
                state.balance = action.payload.balance
            }
        }) 
    }
})