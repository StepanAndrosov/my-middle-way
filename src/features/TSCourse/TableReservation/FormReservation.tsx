import { Button, Form, Input, InputNumber, DatePicker, Select } from 'antd'
import styles from './TableReservation.module.css'
import { TableReservation } from './types'
import { useActions } from '../../../utils/redux-utils'
import { reservationActions } from '../../../store/typescriptCourse'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export const FormReservation = () => {
  const [form] = Form.useForm()

  const { addReserve } = useActions(reservationActions)

  const onFinish = (values: TableReservation) => {
    addReserve({ reserve: values })
    console.log(values)
  }

  return (
    <Form
      className={styles.Form}
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="quests" label="Number of guests">
        <InputNumber />
      </Form.Item>
      <Form.Item name="dateEvent" label="Date event">
        <DatePicker />
      </Form.Item>
      <Form.Item name="options" label="Options">
        <Select placeholder="Select options" allowClear mode="multiple">
          <Option value="kid">children's menu</Option>
          <Option value="vip">vip menu</Option>
          <Option value="special">special menu</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
