import { memo, useState } from 'react'
import { lastPlayerPoints, firstPlayerPoints } from './selectors'
import { useSelector } from 'react-redux'
import styles from './BynarySearch.module.css'
import { InputNumber, Button } from 'antd'

export const ChoosePoints = memo(() => {
  const firstPlace = useSelector(firstPlayerPoints)
  const lastPlace = useSelector(lastPlayerPoints)

  const [points, setPoints] = useState(0)

  const onChange = (value: number) => {
    setPoints(value)
  }

  return (
    <div className={styles.choose}>
      Choose points between:
      <div>
        <span className={styles.chooseElememt}>
          from {lastPlace} {lastPlace === 1 ? 'point' : 'points'}
        </span>
        <span className={styles.chooseElememt}>
          to {firstPlace} points
        </span>
      </div>
      <div className={styles.Input}>
        <InputNumber
          max={firstPlace}
          min={lastPlace}
          onChange={onChange}
        />
      </div>
      {points}
      <Button type="primary" disabled={!points}>
        choose
      </Button>
    </div>
  )
})
