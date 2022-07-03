import { Select } from 'antd'

const { Option } = Select

type Props = {
  placeholder: string
  options: string[]
  onAddItem: (item: string) => void
}

export const MySelect: React.FC<Props> = (props) => (
  <Select
    showSearch
    placeholder={props.placeholder}
    onChange={props.onAddItem}
  >
    {props.options.map((o) => (
      <Option key={o} value={o}>
        {o}
      </Option>
    ))}
  </Select>
)
