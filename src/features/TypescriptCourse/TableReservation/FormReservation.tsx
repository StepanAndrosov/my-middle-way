import { Button, Form, Input, InputNumber, DatePicker, Select } from 'antd'
import styles from './TableReservation.module.css'
import { message, Space } from 'antd'
import { TableReservation } from './types'

const success = () => {
  message.success('This is a success message')
}

const error = () => {
  message.error('This is an error message')
}

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

  const onFinish = (values: TableReservation) => {
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
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
      </Space>
    </Form>
  )
}
