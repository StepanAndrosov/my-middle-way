import { Alert, Button } from 'antd'
import { useState } from 'react'
import { MyArrowIcon } from '../../../../components/ui/ArrowIcon/MyArrowIcon'
import { MyButton } from '../../../../components/ui/Button/MyButtton'
import { RadioGroup } from '../../../../components/ui/RadioGroup/RadioGroup'
import style from '../UIFactory.module.css'
import { CompNames, MyComponents, getComponent } from './types'

type Props = {
  component: CompNames
}

export const ChooseComponent: React.FC<Props> = ({ component }) => {
  const [item, setItem] = useState('')
  const [choose, setChoose] = useState(false)

  const onAddItem = (name: string) => {
    setChoose(false)
    setItem(name)
  }

  const switchStyles = (component: CompNames): string[] => {
    switch (component) {
      case 'Button':
        return ['primary', 'default']
      case 'Alert':
        return ['success', 'info', 'warning', 'error']
      case 'Arrow':
        return ['up', 'right', 'left', 'down']
      default:
        return ['']
    }
  }

  const switchComponent = (component: CompNames): MyComponents => {
    switch (component) {
      case 'Button':
        return MyButton
      case 'Alert':
        return Alert
      case 'Arrow':
        return MyArrowIcon
    }
  }

  return (
    <div className={style.chooseComp}>
      <div className={style.radioSetup}>
        <RadioGroup
          title="What kind of component setup do you need?"
          items={switchStyles(component)}
          onAddItem={onAddItem}
        />

        <Button
          className={style.btn}
          type="default"
          disabled={!component}
          onClick={() => setChoose(true)}
        >
          Choose
        </Button>
      </div>
      <div className={style.component}>{item}</div>
    </div>
  )
}
