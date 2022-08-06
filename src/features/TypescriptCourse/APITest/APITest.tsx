import { Divider, Collapse, Button } from 'antd'

const { Panel } = Collapse

export const APITest = () => {
  return (
    <Collapse defaultActiveKey={['2']}>
      <Panel header="API Test" key="2">
        <h2>API Test</h2>

        <Divider />
      </Panel>
    </Collapse>
  )
}
