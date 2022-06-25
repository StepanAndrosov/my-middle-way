import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LedgerItem } from "../../data/ledger/types"

export const slice = createSlice({
    name: "ts-course",
    initialState: {
        ledger: [] as LedgerItem[]
    },
    reducers: {
        addLedger(state, action: PayloadAction<{ledger: LedgerItem[]}>) {
            state = action.payload
        }
    },

})
