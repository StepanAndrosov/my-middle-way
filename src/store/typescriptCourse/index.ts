import { slice as ledgerSlice } from "./ledger/ledgerReducer";
import {slice as reservationSlice} from "./tableReserve/tableReserveReducer"

const ledgerReducer = ledgerSlice.reducer
const ledgerActions = {
    ...ledgerSlice.actions
}

const reservationReducer = reservationSlice.reducer
const reservationActions = {
    ...reservationSlice.actions
}

export {
    ledgerReducer,
    ledgerActions,

    reservationReducer,
    reservationActions
}