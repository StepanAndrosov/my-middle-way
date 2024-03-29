import React, { useState } from 'react'
import { RadioChangeEvent } from 'antd'
import { Radio } from 'antd'

type Props = {
  title: string
  items: string[]
  onAddItem: (item: string) => void
}

export const RadioGroup: React.FC<Props> = ({
  title,
  items,
  onAddItem,
}) => {
  const [component, setComponent] = useState<string>('')

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setComponent(e.target.value)
    onAddItem(e.target.value)
  }

  return (
    <div>
      <h3>{title}</h3>
      <Radio.Group onChange={onChange} value={component}>
        {items.map((item) => (
          <Radio key={item} value={item}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  )
}
