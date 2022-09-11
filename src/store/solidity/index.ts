import {slice as dutchAuctionSlice} from './dutchAuction/dutchAuction'
import {slice as walletSlice, asyncActions as walletAsyncActions} from './wallet'

const walletReducer = walletSlice.reducer
const dutchAuctionReducer = dutchAuctionSlice.reducer

const walletActions = {
    ...walletSlice.actions,
    ...walletAsyncActions
}
const dutchAuctionActions = {
    ...dutchAuctionSlice.actions
}

export {
    walletReducer,
    walletActions,
    dutchAuctionReducer, 
    dutchAuctionActions
}