import { Divider, Collapse } from 'antd'
import { FormReservation } from './FormReservation'

const { Panel } = Collapse

export const TableReservation = () => {
  return (
    <Collapse>
      <Panel header="Table Reservation" key="3">
        <h2>Table Reservation</h2>
        <FormReservation />

        <Divider />
      </Panel>
    </Collapse>
  )
}
