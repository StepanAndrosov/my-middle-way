import styles from './Algorithms.module.css'
import { BynarySearch } from './'

export const Algorithms: React.FC = () => {
  return (
    <div className={styles.Course}>
      <h1>Algorithms</h1>
      <BynarySearch />
    </div>
  )
}
