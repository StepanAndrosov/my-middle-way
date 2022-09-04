import style from './Solidity.module.css'
import { DutchAuction } from './DutchAuction/DutchAuction'

export const Solidity: React.FC = () => {
  return (
    <div className={style.Course}>
      <h1>Solidity</h1>
      <DutchAuction />
    </div>
  )
}
