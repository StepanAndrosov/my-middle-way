import type { Contract, ethers } from "ethers"

interface IDutchAuction {
    currentPrice: '',
    auction: Contract | any
}

export type {
    IDutchAuction
}