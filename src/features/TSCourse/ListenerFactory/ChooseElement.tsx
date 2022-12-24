import type { RadioChangeEvent } from 'antd'
import { Button, Radio, Select } from 'antd'
import { useState } from 'react'
import { successMessage } from '../../../utils/messsage-utils'
import style from './ListenerFactory.module.css'

const { Option } = Select

export const ChooseElement = () => {
  const [elem, setElem] = useState('')

  const chooseElem = (e: RadioChangeEvent) => {
    setElem(e.target.value)
  }

  return (
    <div>
      <h2>Create element</h2>
      <div className={style.elementBlock}>
        <Radio.Group onChange={chooseElem}>
          <Radio value={'button'}>Choose Button</Radio>
          <Radio value={'select'}>Choose Select</Radio>
        </Radio.Group>

        <div className={style.Element}>
          {elem === 'button' && (
            <Button onClick={() => successMessage('click')}>Click</Button>
          )}
        </div>
        <div className={style.Element}>
          {elem === 'select' && (
            <Select
              onChange={(value) => successMessage(`selected ${value}`)}
              style={{ width: 100 }}
              defaultValue="1"
            >
              <Option value="1">option 1</Option>
              <Option value="2">option 2</Option>
              <Option value="3">option 3</Option>
            </Select>
          )}
        </div>
      </div>
    </div>
  )
}
