import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { ledgerReducer, reservationReducer } from './typescriptCourse'
import { dutchAuctionReducer, walletReducer } from './solidity'
import { bynarySearchReducer } from './algorithm'

const rootReducer = combineReducers({
  // tscourse stores
  ledgerStore: ledgerReducer,
  reservationStore: reservationReducer,
  // sol stores
  walletStore: walletReducer,
  dutchStore: dutchAuctionReducer,
  // algorithm stores
  bynarySearchStore: bynarySearchReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunk),
})

export type AppStoreType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store // for dev
