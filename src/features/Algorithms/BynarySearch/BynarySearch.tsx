import React from 'react'
import { Divider, Collapse } from 'antd'
import styles from './BynarySearch.module.css'
import { ChoosePoints } from './ChoosePoints'

const { Panel } = Collapse

export const BynarySearch = React.memo(() => {
  return (
    <Collapse>
      <Panel header="Bynary Search" key="1">
        <h2>Bynary Search</h2>
        <p>
          I have a sorted array of leader tables so I can apply a binary
          search to reduce the search iterations
        </p>
        <p>
          In the problem I need to find a league and a place in the league
          by the number of points
        </p>
        <div className={styles.content}>
          <ChoosePoints />
        </div>

        <Divider />
      </Panel>
    </Collapse>
  )
})
