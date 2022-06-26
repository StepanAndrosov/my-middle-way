import { Select } from 'antd'

const onChange = (value: string) => {
  console.log(`selected ${value}`)
}

const { Option } = Select

type Props = {
  placeholder: string
  options: string[]
}

export const MySelect: React.FC<Props> = (props) => (
  <Select showSearch placeholder={props.placeholder} onChange={onChange}>
    {props.options.map((o) => (
      <Option key={o} value={o}>
        {o}
      </Option>
    ))}
  </Select>
)
