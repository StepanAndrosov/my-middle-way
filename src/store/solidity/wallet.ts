import { errorMessage } from './../../utils/messsage-utils';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IWallet } from './types';

const initialState: {initApp:IWallet} = {
    initApp: {
        wallet: '',
        initMetamaskExtension: false,
        metamaskExtensionError: ''
    } 
}

export const slice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setMetamaskError(state, action: PayloadAction<{error: string}>) {
            state.initApp.metamaskExtensionError = action.payload.error
            state.initApp.initMetamaskExtension = false
            errorMessage(action.payload.error)
        },
        setInitMatamask(state) {
            state.initApp.initMetamaskExtension = true
        }
    },
    extraReducers: {}
})