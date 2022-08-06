import { Button, Form, Input, InputNumber, DatePicker, Select } from 'antd'
import styles from './TableReservation.module.css'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

type Reserve = {
  id?: string
  quests?: number
  dateEvent?: string
  options?: string[]
}

export const FormReservation = () => {
  const [form] = Form.useForm()

  const onFinish = (values: Reserve) => {
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
      <Form.Item name="id" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="quests" label="Number of guests">
        <InputNumber />
      </Form.Item>
      <Form.Item name="dateEvent" label="Date Event">
        <DatePicker />
      </Form.Item>
      <Form.Item name="options" label="Options">
        <Select placeholder="Select a option" allowClear mode="multiple">
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
