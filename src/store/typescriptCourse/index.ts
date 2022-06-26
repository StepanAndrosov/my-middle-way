import { slice } from "./ledgerReducer";

const ledgerReducer = slice.reducer

const ledgerActions = {
    ...slice.actions
}

export {
    ledgerReducer,
    ledgerActions
}