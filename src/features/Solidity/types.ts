
interface IDutchAuction {
    selectedAccount: string,
    txBeintSent: boolean,
    networkError: boolean,
    transactionError: boolean,
    balance: string
}

export type {
    IDutchAuction
}