import { TableReservation } from '../TableReservation/TableReservation'
import { Ledger } from '../Ledger/Ledger'
import { UIFactory } from '../UIFactory/UIFactory'
import styles from './TSCoursre.module.css'
import { ListenerFactory } from '../ListenerFactory/ListenerFactory'

export const TSCourse: React.FC = () => {
  return (
    <div className={styles.Course}>
      <h1>TypeScript Course</h1>
      <Ledger />
      <UIFactory />
      <TableReservation />
      <ListenerFactory />
    </div>
  )
}
