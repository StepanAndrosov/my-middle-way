import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import { tsReducer } from "./typescriptCourse";

const rootReducer = combineReducers({
    tsCourse: tsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(thunk)
})

export type AppStoreType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store // for dev