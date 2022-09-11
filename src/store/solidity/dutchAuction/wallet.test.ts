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

const {connect, setMetamaskError, setInitMatamask} = walletActions
test("correct setError", () => {
    const err = "some error"   
    const action = setMetamaskError({error: err})
    const endState = walletReducer(startState, action)

    expect(endState.metamaskExtensionError).toBe(err)
})
test("correct setInit", () => {
    const action = setInitMatamask()
    const endState = walletReducer(startState, action)

    expect(endState.initMetamaskExtension).toBeTruthy()
})
test("correct set address", () => {
    const address = "0x00"   
    const action = connect.fulfilled({address}, "requestId", undefined)
    const endState = walletReducer(startState, action)

    expect(endState.wallet).toBe(address)
})