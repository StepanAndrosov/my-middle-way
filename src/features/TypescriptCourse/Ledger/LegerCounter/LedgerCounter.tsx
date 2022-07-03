import { memo, useState } from 'react'
import { MySelect } from '../../../../components'
import style from './LedgerCounter.module.css'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import {
  selectCreditAccounts,
  selectDebitAccounts,
  selectAccounts,
} from '../selectors'
import { useActions } from '../../../../utils/redux-utils'
import { ledgerActions } from '../../../../store/typescriptCourse'
import { AccountLedger } from './AccountLedger'

export const LedgerCounter = memo(() => {
  const [account, setAccount] = useState('')
  const [credit, setCredit] = useState(0)
  const [debit, setDebit] = useState(0)

  const creditAccountsId = useSelector(selectCreditAccounts)
  const debitAccountsId = useSelector(selectDebitAccounts)
  const accountsDays = useSelector(selectAccounts)

  const { accountDailyReducer } = useActions(ledgerActions)

  const accountsId = [...creditAccountsId, ...debitAccountsId].filter(
    (a, i, arr) => arr.indexOf(a) === i
  )

  const onChooseAccount = (item: string) => {
    accountDailyReducer({ id: item })
    setAccount(item)
  }

  type CountKeys = 'creditDayTotal' | 'debitDayTotal'

  const onCountTotal = (key: CountKeys): number => {
    const total = accountsDays
      .filter((a) => a[key] !== 0)
      .map((a) => a[key])
      .reduce((a, b) => a + b)
    return Number(total.toFixed(2))
  }

  const onCount = () => {
    setCredit(onCountTotal('creditDayTotal'))
    setDebit(onCountTotal('debitDayTotal'))
  }

  return (
    <div>
      <div className={style.LedgerCounter}>
        <div className={style.SelectBlock}>
          <div>
            <MySelect
              options={accountsId}
              placeholder="choose account"
              onAddItem={onChooseAccount}
            />
            <p className={style.selectItem}>{account}</p>
          </div>
        </div>
        <AccountLedger
          account={account}
          creditTotal={credit}
          debitTotal={debit}
        />
      </div>
      <Button type="primary" disabled={!account} onClick={onCount}>
        count
      </Button>
    </div>
  )
})
