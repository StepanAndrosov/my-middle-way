import { Button } from 'antd'
import { successMessage } from '../../../utils/messsage-utils'

export interface ListenerFactory {
  makeButtonClick: () => (this: HTMLButtonElement, evt: MouseEvent) => void
  makeInputInput: () => (this: HTMLInputElement, evt: InputEvent) => void
  makeSelectInput: () => (this: HTMLSelectElement, evt: InputEvent) => void
  makeTextAreaInput: () => (
    this: HTMLTextAreaElement,
    evt: InputEvent
  ) => void
}

type ListenerNames =
  | 'makeButtonClick'
  | 'makeInputInput'
  | 'makeSelectInput'
  | 'makeTextAreaInput'

export const ChooseElement = () => {
  const chooseElem = (
    type: 'button' | 'select' | 'input' | 'textarea',
    methods: ListenerFactory
  ) => {
    switch (type) {
      case 'button':
        return <button>button</button>
    }
  }

  return (
    <div>
      <h2>create element</h2>
      <Button type="primary">Button</Button>
      <div>{}</div>
    </div>
  )
}
