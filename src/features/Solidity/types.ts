
interface IDutchAuction {
    selectedAccount: string,
    txBeingSent: boolean,
    networkError: boolean,
    transactionError: boolean,
    balance: string
}

export type {
    IDutchAuction
}