import { memo, useState } from 'react'
import { lastPlayerPoints, firstPlayerPoints } from './selectors'
import { useSelector } from 'react-redux'
import styles from './BynarySearch.module.css'
import { InputNumber, Button } from 'antd'

type Props = {
  handleChange: (points: number) => void
}

export const ChoosePoints: React.FC<Props> = memo((props) => {
  const firstPlace = useSelector(firstPlayerPoints)
  const lastPlace = useSelector(lastPlayerPoints)

  const [points, setPoints] = useState(0)

  const onChange = (value: number) => {
    setPoints(value)
  }

  const onClick = () => {
    props.handleChange(points)
  }

  return (
    <div className={styles.choose}>
      Choose points:
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
      <Button
        type="primary"
        disabled={!points}
        className={styles.chooseButton}
        onClick={onClick}
      >
        choose
      </Button>
    </div>
  )
})
