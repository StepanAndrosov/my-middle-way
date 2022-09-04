import {slice as dutchAuctionSlice} from './dutchAuction/dutchAuction'


const dutchAuctionReducer = dutchAuctionSlice.reducer

const dutchAuctionActions = {
    ...dutchAuctionSlice.actions
}

export {
    dutchAuctionReducer, 
    dutchAuctionActions
}