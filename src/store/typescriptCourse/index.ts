import { slice as ledgerSlice } from "./ledger/ledgerReducer";

const ledgerReducer = ledgerSlice.reducer

const ledgerActions = {
    ...ledgerSlice.actions
}

export {
    ledgerReducer,
    ledgerActions
}