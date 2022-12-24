import style from './LedgerCounter.module.css'

type Props = {
  account: string
  debitTotal: number
  creditTotal: number
}

export const AccountLedger: React.FC<Props> = (props) => {
  return (
    <div className={style.AccountLedger}>
      <h3>Account sum</h3>
      <span>account: {props.account ? props.account : 'string'}</span>
      <span>
        debitDayTotal: {props.debitTotal ? props.debitTotal : 'number'}
      </span>
      <span>
        creditDayTotal: {props.creditTotal ? props.creditTotal : 'number'}
      </span>
    </div>
  )
}
