import { Card } from 'antd'
import style from '../Ledger.module.css'

export const LedgerCodeCard: React.FC = () => {
  return (
    <>
      <Card
        style={{ maxWidth: 600 }}
        title="The ledger element
        looks like this:"
      >
        <div className={style.codeStyle}>
          <span className={style.bracers}>&#123;</span>
          <div className={style.codeString}>
            <span>"generalLedgerId" : </span>
            <span className={style.blue}> 2</span>,
          </div>
          <div className={style.codeString}>
            <span>"posted" : </span>
            <span className={style.green}>"2021-07-28T07:49:45.507"</span>,
          </div>
          <div className={style.codeString}>
            <span>"debitAccountId" : </span>
            <span className={style.green}>"311.0001 income"</span>,
          </div>
          <div className={style.codeString}>
            <span>"creditAccountId" : </span>
            <span className={style.green}>"158.0001 project"</span>,
          </div>
          <div className={style.codeString}>
            <span>"amount" : </span>
            <span className={style.blue}>2021.43</span>,
          </div>
          <div className={style.codeString}>
            <span>"referenceId" : </span>
            <span className={style.green}>"promo"</span>
          </div>
          <span className={style.bracers}>&#125;</span>
        </div>
      </Card>
    </>
  )
}
