import React, { useState } from 'react'
import { RadioChangeEvent } from 'antd'
import { Radio } from 'antd'

export const ChooseComponent: React.FC = () => {
  type Components = 'button' | 'select' | 'arrow'

  const [component, setComponent] = useState<'' | Components>('')

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setComponent(e.target.value)
  }

  return (
    <div>
      <h3>What element do you want to create?</h3>
      <Radio.Group onChange={onChange} value={component}>
        <Radio value={'button'}>Button</Radio>
        <Radio value={'select'}>Select</Radio>
        <Radio value={'arrow'}>Arrow</Radio>
      </Radio.Group>
    </div>
  )
}
