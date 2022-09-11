import { IWallet } from "../types";
import { walletReducer, walletActions } from "..";


const startState: IWallet  = {
    wallet: '',
    balance: '',
    signer: null,
    chainId: '',
    initMetamaskExtension: false,
    metamaskExtensionError: '',
    networkError: '',
    transactionError: ''
}

const {connect} = walletActions

test("correct set address", async () => {
    const address = "0x00"
    
    const action = connect.fulfilled(address, "requestId", undefined)
    const endState = walletReducer(startState, action)

    expect(endState.wallet).toBe(address)
})