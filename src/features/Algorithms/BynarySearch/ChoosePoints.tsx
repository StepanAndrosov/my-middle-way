import { memo } from 'react'
import { lastPlayerPoints, firstPlayerPoints } from './selectors'
import { useSelector } from 'react-redux'
import styles from './BynarySearch.module.css'

export const ChoosePoints = memo(() => {
  const firstPlace = useSelector(firstPlayerPoints)
  const lastPlace = useSelector(lastPlayerPoints)
  return (
    <div className={styles.choose}>
      Choose points between:
      <div>
        <span className={styles.chooseElememt}>{lastPlace} p.</span>
        <span className={styles.chooseElememt}>{firstPlace} p.</span>
      </div>
    </div>
  )
})
