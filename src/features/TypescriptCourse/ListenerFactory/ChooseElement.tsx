import { Button, Select, Input, Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useState } from 'react'
import { successMessage } from '../../../utils/messsage-utils'
import style from './ListenerFactory.module.css'

const { TextArea } = Input

export interface ListenerFactory {
  makeButtonClick: () => void
  makeInputInput: () => void
  makeSelectInput: () => void
  makeTextAreaInput: () => void
}
export interface Subscribe {
  (
    target: typeof Button,
    name: 'onClick',
    listener: ReturnType<ListenerFactory['makeButtonClick']>
  ): void
  (
    target: typeof Input,
    name: 'onInput',
    listener: ReturnType<ListenerFactory['makeInputInput']>
  ): void
  (
    target: typeof Select,
    name: 'onChange',
    listener: ReturnType<ListenerFactory['makeSelectInput']>
  ): void
  (
    target: typeof TextArea,
    name: 'onInput',
    listener: ReturnType<ListenerFactory['makeTextAreaInput']>
  ): void
}

export const ChooseElement = () => {
  const [elem, setElem] = useState('')

  const chooseElem = (
    type: 'button' | 'select' | 'input' | 'textarea',
    check: CheckboxChangeEvent
  ) => {
    if (check.target.checked)
      switch (type) {
        case 'button':
          setElem(type)
          break
      }
    else setElem('')
  }

  return (
    <div>
      <h2>create element</h2>
      <div className={style.elementBlock}>
        <Checkbox onChange={(check) => chooseElem('button', check)}>
          Choose Button
        </Checkbox>
        <div>
          {elem === 'button' ? <Button>Click</Button> : 'choose element'}
        </div>
      </div>
    </div>
  )
}
