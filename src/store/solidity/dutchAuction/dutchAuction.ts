import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IDutchAuction } from "../../../features/Solidity/types"
import { errorMessage, successMessage } from '../../../utils/messsage-utils';

const initialState = {
    auction: {
        selectedAccount: "",
        txBeingSent: false,
        networkError: "",
        transactionError: false,
        balance: ''
    } as IDutchAuction
}

export const slice = createSlice({
    name: "dutch-auction",
    initialState,
    reducers: {
        setNetworkError(state, action: PayloadAction<{error: string}>) {
            state.auction.networkError = action.payload.error
            errorMessage(action.payload.error)
        }
    },
})