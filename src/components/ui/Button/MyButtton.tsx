import { Button } from 'antd'

type Props = {
  primary?: boolean
}

export const MyButton: React.FC<Props> = (props) => (
  <Button type={props.primary ? 'primary' : 'default'} />
)
