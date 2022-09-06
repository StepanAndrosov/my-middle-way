import React, { useEffect } from 'react'
import { Divider, Collapse } from 'antd'
import { ethers } from 'ethers'
import { useActions } from '../../../utils/redux-utils'
import { dutchAuctionActions } from '../../../store/solidity'

import auctionAddress from '../contracts/DutchAuction-contract-address.json'
import auctionArtifact from '../contracts/DutchAuction.json'

const { Panel } = Collapse

const HARDHAT_NETWORK_ID = '1337'
const ERROR_CODE_TX_REJECTED_BY_USER = 4001

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
