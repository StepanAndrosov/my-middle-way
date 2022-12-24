import { Divider, Collapse } from 'antd'
import { ChooseElement } from './ChooseElement'

const { Panel } = Collapse

export const ListenerFactory = () => {
  return (
    <Collapse>
      <Panel header="Listener Factory" key="4">
        <h2>Listener Factory</h2>
        <ChooseElement />
        <Divider />
      </Panel>
    </Collapse>
  )
}
