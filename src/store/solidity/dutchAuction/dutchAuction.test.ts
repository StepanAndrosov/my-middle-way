import { IDutchAuction } from "../../../features/Solidity/types"
import {dutchAuctionActions, dutchAuctionReducer} from "../"
import type { Contract } from "ethers"


const startState: IDutchAuction  = {
    currentPrice: '',
    auction: {} as Contract
}

const {initialize} = dutchAuctionActions

test("should be to create auction", () => {
    const auction = {address: '0x00'} as Contract 
    const action = initialize.fulfilled({auction}, 'requestId', undefined)
    const endState = dutchAuctionReducer(startState, action)

    expect(endState.auction.address).toBe('0x00')
})