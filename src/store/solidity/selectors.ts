import { AppStoreType } from './../store';
import { ethers } from 'ethers';

export const metamaskExtension = (state: AppStoreType) => state.walletStore.initMetamaskExtension
export const metamaskExtensionErr = (state: AppStoreType) => state.walletStore.metamaskExtensionError
export const wallet = (state: AppStoreType) => state.walletStore.wallet
export const balanceAccount = (state: AppStoreType) => state.walletStore.balance ? ethers.utils.formatEther(state.walletStore.balance) : ''
export const walletLabel = (state: AppStoreType) => state.walletStore.wallet ? `${state.walletStore.wallet.slice(0, 5)}...${state.walletStore.wallet.slice(38)}` : 'Connect Wallet'