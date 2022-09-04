import React from 'react'
import { Divider, Collapse } from 'antd'

const { Panel } = Collapse

export const DutchAuction = React.memo(() => {
  return (
    <Collapse>
      <Panel header="DuchAuction" key="1">
        <h2>Duch Auction</h2>
      </Panel>

      <Divider />
    </Collapse>
  )
})
