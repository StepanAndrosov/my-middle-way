import { Divider, Collapse, Checkbox, Button } from 'antd'
import { MyArrowIcon } from '../../../components/ui/ArrowIcon/MyArrowIcon'
import { ChooseComponent } from './ChooseComponent/ChooseComponent'
import style from './UIFactory.module.css'

const { Panel } = Collapse

export const UIFactory = () => {
  return (
    <Collapse defaultActiveKey={['2']}>
      <Panel header="UIFactory" key="2">
        <h2>UI Factory</h2>
        <p>In this task I need to create UI Factory</p>
        <div className={style.uiBlock}>
          <div className={style.content}>
            <ChooseComponent />
            <Button className={style.btn} type="primary">
              Create
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
