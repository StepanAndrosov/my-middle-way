import { AppStoreType } from './../store';


export const metamaskExtension = (state: AppStoreType) => state.walletStore.initApp.initMetamaskExtension
export const metamaskExtensionErr = (state: AppStoreType) => state.walletStore.initApp.metamaskExtensionError