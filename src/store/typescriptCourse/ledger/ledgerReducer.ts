import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LedgerItem, AccountDaily } from "../../../features/TypescriptCourse/Ledger/types"
import { ledgerDB } from "../../../data"

const initialState = {
    ledger: ledgerDB,
    accountDays: [] as AccountDaily[] 
}

export const slice = createSlice({
    name: "ledger",
    initialState,
    reducers: {
        addLedger(state, action: PayloadAction<{ledger: LedgerItem[]}>) {
            state.ledger = action.payload.ledger
        },
        accountDailyReducer(state, action: PayloadAction<{id: string}>) {
            const { id } = action.payload
            console.log('reducer', id)
            const debitDays = state.ledger.filter(l => l.debitAccountId === id)
            const creditDays = state.ledger.filter(l => l.creditAccountId === id)
            const days = [...debitDays, ...creditDays]
           
           state.accountDays = days.map(d => ({id: id, date: d.posted.slice(0, 10), debitDayTotal: d.debitAccountId === id ? d.amount : 0, creditDayTotal: d.creditAccountId === id ? d.amount : 0}))
        },
    },

})
