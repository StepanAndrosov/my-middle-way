import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LedgerItem } from "../../data/types"
import { ledgerDB } from "../../data"

const initialState: LedgerItem[] = ledgerDB

export const slice = createSlice({
    name: "ledger",
    initialState,
    reducers: {
        addLedger(state, action: PayloadAction<{ledger: LedgerItem[]}>) {
            state = action.payload.ledger
        }
    },

})
