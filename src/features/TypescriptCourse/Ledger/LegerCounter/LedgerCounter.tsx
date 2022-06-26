import { useEffect } from 'react'
import { MySelect } from '../../../../components'
import style from './LedgerCounter.module.css'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import {
  selectDays,
  selectCreditAccounts,
  selectDebitAccounts,
} from '../selectors'

export const LedgerCounter: React.FC = () => {
  const days = useSelector(selectDays)
  const creditAccounts = useSelector(selectCreditAccounts)
  const debitAccounts = useSelector(selectDebitAccounts)

  const accounts = [...creditAccounts, ...debitAccounts].filter(
    (a, i, arr) => arr.indexOf(a) === i
  )

  useEffect(() => console.log(accounts))

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
