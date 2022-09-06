import React, { useEffect } from 'react'
import style from './Solidity.module.css'
import { DutchAuction } from './DutchAuction/DutchAuction'
import { useActions } from '../../utils/redux-utils'
import { walletActions } from '../../store/solidity'
import { useSelector } from 'react-redux'
import {
  metamaskExtension,
  metamaskExtensionErr,
} from '../../store/solidity/selectors'

export const Solidity: React.FC = React.memo(() => {
  const initMetamask = useSelector(metamaskExtension)
  const metamaskErr = useSelector(metamaskExtensionErr)
  const { setMetamaskError, setInitMatamask } = useActions(walletActions)

  useEffect(() => {
    console.log('ext ethereum ', window.ethereum)
    if (window.ethereum === undefined) {
      setMetamaskError({ error: 'Please install MetaMask!' })
    } else {
      setInitMatamask()
    }
  }, [setMetamaskError, setInitMatamask])

  return (
    <div className={style.Course}>
      <h1>Solidity</h1>
      {metamaskErr && <div>{metamaskErr}</div>}
      <DutchAuction />
    </div>
  )
})
