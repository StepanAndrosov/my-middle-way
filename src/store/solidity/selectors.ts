import { AppStoreType } from './../store';

export const metamaskExtension = (state: AppStoreType) => state.walletStore.initMetamaskExtension
export const metamaskExtensionErr = (state: AppStoreType) => state.walletStore.metamaskExtensionError