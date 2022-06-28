import { useEffect } from 'react'
import { MySelect } from '../../../../components'
import style from './LedgerCounter.module.css'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import {
  selectDays,
  selectCreditAccounts,
  selectDebitAccounts,
  selectAccounts,
} from '../selectors'
import { useActions } from '../../../../utils/redux-utils'
import { ledgerActions } from '../../../../store/typescriptCourse'

export const LedgerCounter: React.FC = () => {
  const days = useSelector(selectDays)
  const creditAccounts = useSelector(selectCreditAccounts)
  const debitAccounts = useSelector(selectDebitAccounts)
  const accountsDays = useSelector(selectAccounts)

  const { accountDailyReducer } = useActions(ledgerActions)

  const accounts = [...creditAccounts, ...debitAccounts].filter(
    (a, i, arr) => arr.indexOf(a) === i
  )

  useEffect(() => {
    if (accountsDays) accountDailyReducer({ id: '103.0001 bank' })
    console.log(accountsDays)
  }, [accountDailyReducer])

  return (
    <div className={style.LedgerCounter}>
      <div className={style.selectBlock}>
        <MySelect options={days} placeholder="choose day" />
        <MySelect options={accounts} placeholder="choose account" />
      </div>
      <Button type="primary">count</Button>
    </div>
  )
}
