import React from 'react'
import { Divider, Collapse } from 'antd'
import style from './Ledger.module.css'
import { LedgerCodeCard } from './LedgerCodeCard/LedgerCodeCard'
import { LedgerCounter } from './LegerCounter/LedgerCounter'

const { Panel } = Collapse

export const Ledger = React.memo(() => {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="Ledger" key="1">
        <h2>Ledger</h2>
        <p>
          In this task I need to reduce the ledger. The ledger has 500
          items
        </p>
        <div className={style.content}>
          <LedgerCodeCard />
          <div>
            <h4>
              This object must be converted to another list daily account
              turnovers.
            </h4>
            <p>The solution to this task in the interface:</p>
          </div>
          <LedgerCounter />
        </div>

        <Divider />
      </Panel>
    </Collapse>
  )
})
