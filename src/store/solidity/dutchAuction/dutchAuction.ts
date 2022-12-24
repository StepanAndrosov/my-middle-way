import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { Contract, ethers } from "ethers"

import { IDutchAuction } from "../../../features/Solidity/types"
import { errorMessage } from "../../../utils/messsage-utils"

import auctionAddress from '../../../features/Solidity/contracts/DutchAuction-contract-address.json'
import auctionArtifact from '../../../features/Solidity/contracts/DutchAuction.json'

const initialize = createAsyncThunk('wallet/inittialize', async (param, {dispatch}) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
        const auction = new ethers.Contract(
            auctionAddress.DutchAuction,
            auctionArtifact.abi,
            provider.getSigner(0)
          )
        
        return {auction}
    } catch (error: any) {
        errorMessage(error.message)
    }
}) 

export const asyncActions = {
    initialize
}

const initialState: IDutchAuction = {
    currentPrice: '',
    auction: {} as Contract
}



export const slice = createSlice({
    name: "dutch-auction",
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(initialize.fulfilled, (state, action) => {
            if(action.payload?.auction)
            state.auction = action.payload?.auction
        })
    },
})