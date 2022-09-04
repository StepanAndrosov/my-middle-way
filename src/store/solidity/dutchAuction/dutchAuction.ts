import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IDutchAuction } from "../../../features/Solidity/types"

const initialState = {
    auction: {} as IDutchAuction
}

export const slice = createSlice({
    name: "dutch-auction",
    initialState,
    reducers: {

    },

})