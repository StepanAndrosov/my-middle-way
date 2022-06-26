import { useEffect } from 'react'
import { MySelect } from '../../../../components'
import style from './LedgerCounter.module.css'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { selectDays } from '../selectors'

export const LedgerCounter: React.FC = () => {
  const days = useSelector(selectDays)
  useEffect(() => console.log(days), [days])

  return (
    <div className={style.LedgerCounter}>
      <div className={style.selectBlock}>
        <MySelect
          options={[
            { text: '2021-07-28', value: '2021-07-28' },
            { text: '2021-07-29', value: '2021-07-29' },
          ]}
          placeholder="choose day"
        />
        <MySelect
          options={[
            { text: '311.0001 income', value: '311.0001 income' },
            { text: '158.0001 project', value: '158.0001 project' },
          ]}
          placeholder="choose account"
        />
      </div>
      <Button type="primary">count</Button>
    </div>
  )
}
