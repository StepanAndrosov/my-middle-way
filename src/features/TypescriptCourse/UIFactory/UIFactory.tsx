import { Divider, Collapse, Button } from 'antd'
import { useState } from 'react'
import { RadioGroup } from '../../../components/ui/RadioGroup/RadioGroup'
import { ChooseComponent } from './ChooseComponent/ChooseComponent'
import { CompNames } from './ChooseComponent/types'
import style from './UIFactory.module.css'

const { Panel } = Collapse

export const UIFactory = () => {
  const [component, setComponent] = useState('' as CompNames)
  const [choose, setChoose] = useState(false)

  const onAddItem = (name: CompNames) => {
    setChoose(false)
    setComponent(name)
  }

  const componentNames: CompNames[] = ['Button', 'Alert', 'Arrow']

  return (
    <Collapse defaultActiveKey={['2']}>
      <Panel header="UIFactory" key="2">
        <h2>UI Factory</h2>
        <p>I need to create UI Factory in this task </p>
        <div className={style.uiBlock}>
          <div className={style.content}>
            <RadioGroup
              title="What element do you want to create?"
              items={componentNames}
              onAddItem={onAddItem}
            />
            <Button
              className={style.btn}
              type="default"
              disabled={!component}
              onClick={() => setChoose(true)}
            >
              Continue
            </Button>
          </div>
          <div className={style.component}>
            {(choose && <ChooseComponent component={component} />) || (
              <span>click the continue</span>
            )}
          </div>
        </div>

        <Divider />
      </Panel>
    </Collapse>
  )
}
