import {slice as dutchAuctionSlice} from './dutchAuction/dutchAuction'
import {slice as walletSlice} from './wallet'

const walletReducer = walletSlice.reducer
const dutchAuctionReducer = dutchAuctionSlice.reducer

const walletActions = {
    ...walletSlice.actions
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