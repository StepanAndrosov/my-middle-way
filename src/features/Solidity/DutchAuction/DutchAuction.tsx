import React, { useEffect } from 'react'
import { Divider, Collapse } from 'antd'
import { ethers } from 'ethers'
import { useActions } from '../../../utils/redux-utils'
import { dutchAuctionActions } from '../../../store/solidity'

import auctionAddress from '../contracts/DutchAuction-contract-address.json'
import auctionArtifact from '../contracts/DutchAuction.json'

const { Panel } = Collapse

export const DutchAuction = React.memo(() => {
  return (
    <Collapse>
      <Panel header="DuchAuction" key="DuchAuction">
        <h2>Duch Auction</h2>
        <Divider />
      </Panel>
    </Collapse>
  )
})
