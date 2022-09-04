import style from './Solidity.module.css'
import { DuchAuction } from './DuchAuction/DuchAuction'

export const Solidity: React.FC = () => {
  return (
    <div className={style.Course}>
      <h1>Solidity</h1>
      <DuchAuction />
    </div>
  )
}
