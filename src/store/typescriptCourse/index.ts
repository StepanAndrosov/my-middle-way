import { slice } from "./ledger/ledgerReducer";

const ledgerReducer = slice.reducer

const ledgerActions = {
    ...slice.actions
}

export {
    ledgerReducer,
    ledgerActions
}