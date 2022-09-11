import React, { useEffect } from 'react'
import style from './Solidity.module.css'
import { DutchAuction } from './DutchAuction/DutchAuction'
import { useActions } from '../../utils/redux-utils'
import { walletActions } from '../../store/solidity'
import { useSelector } from 'react-redux'
import {
  balanceAccount,
  metamaskExtension,
  metamaskExtensionErr,
  wallet,
  walletLabel,
} from '../../store/solidity/selectors'
import { HARDHAT_NETWORK_ID } from '../../store/solidity/types'
import { Button } from 'antd'
import { ButtonType } from 'antd/lib/button'

export const Solidity: React.FC = React.memo(() => {
  const initMetamask = useSelector(metamaskExtension)
  const metamaskErr = useSelector(metamaskExtensionErr)
  const connectLabel = useSelector(walletLabel)
  const userWallet = useSelector(wallet)
  const balance = useSelector(balanceAccount)
  const { setMetamaskError, setInitMatamask, connect } =
    useActions(walletActions)

  useEffect(() => {
    if (window.ethereum === undefined) {
      setMetamaskError({ error: 'Please install MetaMask!' })
      return
    }
    if (window.ethereum.networkVersion !== HARDHAT_NETWORK_ID) {
      setMetamaskError({ error: 'Please connect to localhost:8545' })
      return
    } else {
      setInitMatamask()
    }
  }, [setMetamaskError, setInitMatamask, connect])

  const setTypeButton = (): ButtonType =>
    userWallet ? 'primary' : 'default'

  return (
    <div className={style.Course}>
      <div className={style.TitleGroup}>
        <h1>Solidity</h1>
        <Button onClick={connect} type={setTypeButton()}>
          {connectLabel}
        </Button>
      </div>
      <span>Your balance : {balance}</span>
      {metamaskErr && <div>{metamaskErr}</div>}
      <DutchAuction />
    </div>
  )
})
