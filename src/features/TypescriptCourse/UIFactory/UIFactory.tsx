import { Divider, Collapse } from 'antd'
import style from './UIFactory.module.css'

const { Panel } = Collapse

export const UIFactory = () => {
  return (
    <Collapse defaultActiveKey={['2']}>
      <Panel header="UIFactory" key="2">
        <h2>UI Factory</h2>
        <p>In this task I need to create UI Factory</p>
        <div className={style.content}></div>

        <Divider />
      </Panel>
    </Collapse>
  )
}
