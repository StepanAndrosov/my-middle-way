import { useEffect } from 'react'
import { Divider } from 'antd'
import style from './Ledger.module.css'
import { LedgerCodeCard } from './LedgerCodeCard/LedgerCodeCard'
import { LedgerCounter } from './LegerCounter/LedgerCounter'
import { useActions } from '../../../utils/redux-utils'
import { tsActions } from '../../../store/typescriptCourse'
import { ledgerDB } from '../../../data/ledger/ledgerDB'

export const Ledger: React.FC = () => {
  const { addLedger } = useActions(tsActions)

  useEffect(() => {
    addLedger({ ledger: ledgerDB })
  }, [addLedger])

  return (
    <div>
      <h2>Ledger</h2>
      <p>
        In this task I need to reduce the ledger. The ledger has 500 items
      </p>
      <div className={style.content}>
        <LedgerCodeCard />
        <div>
          <h4>
            This object must be converted to another list - daily account
            turnovers.
          </h4>
          <p>The solution to this task in the interface:</p>
        </div>
        <LedgerCounter />
      </div>

      <Divider />
    </div>
  )
}
