import { memo } from 'react'
import { MySelect } from '../../../components'

export const ChoosePoints = memo(() => {
  return (
    <div>
      <MySelect
        placeholder="choose points"
        options={['101', '202']}
        onAddItem={() => {}}
      />
    </div>
  )
})
