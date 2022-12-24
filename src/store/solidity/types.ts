import type { providers, Signer, VoidSigner, Wallet } from 'ethers'

const HARDHAT_NETWORK_ID = '31337'
const ERROR_CODE_TX_REJECTED_BY_USER = 4001

type ISigner = providers.JsonRpcSigner | Wallet | Signer | VoidSigner | null

interface IWallet {
    wallet: string
    balance: string
    signer: ISigner
    chainId: string
    initMetamaskExtension: boolean
    metamaskExtensionError: string
    networkError: string
    transactionError: string
}

export {
    HARDHAT_NETWORK_ID,
    ERROR_CODE_TX_REJECTED_BY_USER
}

export type {
    IWallet,
    ISigner
}