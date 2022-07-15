import { Divider, Collapse, Button } from 'antd'
import { useState } from 'react'
import { MyArrowIcon } from '../../../components/ui/ArrowIcon/MyArrowIcon'
import { RadioGroup } from '../../../components/ui/RadioGroup/RadioGroup'
import style from './UIFactory.module.css'

const { Panel } = Collapse

export const UIFactory = () => {
  const [component, setComponent] = useState('')

  const onAddItem = (name: string) => {
    setComponent(name)
  }

  return (
    <Collapse defaultActiveKey={['2']}>
      <Panel header="UIFactory" key="2">
        <h2>UI Factory</h2>
        <p>I need to create UI Factory in this task </p>
        <div className={style.uiBlock}>
          <div className={style.content}>
            <RadioGroup
              title="What element do you want to create?"
              items={['Button', 'Select', 'Arrow']}
              onAddItem={onAddItem}
            />
            {component}
            <Button className={style.btn} type="default">
              Continue
            </Button>
          </div>
          <div className={style.component}>
            <MyArrowIcon direction="up" />
            <MyArrowIcon direction="right" />
            <MyArrowIcon direction="down" />
            <MyArrowIcon direction="left" />
          </div>
        </div>

        <Divider />
      </Panel>
    </Collapse>
  )
}
