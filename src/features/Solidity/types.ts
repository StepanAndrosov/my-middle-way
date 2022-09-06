
interface IDutchAuction {
    selectedAccount: string,
    txBeingSent: boolean,
    networkError: string,
    transactionError: boolean,
    balance: string
}

export type {
    IDutchAuction
}