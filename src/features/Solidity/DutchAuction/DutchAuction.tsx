import React from 'react'
import { Divider, Collapse } from 'antd'

import auctionAddress from '../contracts/DutchAuction-contract-address.json'
import auctionArtifact from '../contracts/DutchAuction.json'

const { Panel } = Collapse

const HARDHAT_NETWORK_ID = '1337'
const ERROR_CODE_TX_REJECTED_BY_USER = 4001

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
