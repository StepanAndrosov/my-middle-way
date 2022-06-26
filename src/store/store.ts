import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import { ledgerReducer } from "./typescriptCourse";

const rootReducer = combineReducers({
    ledger: ledgerReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(thunk)
})

export type AppStoreType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store // for dev