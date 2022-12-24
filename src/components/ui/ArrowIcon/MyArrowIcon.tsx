import {
  ArrowUpOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'

type Props = {
  direction: 'up' | 'right' | 'left' | 'down'
}

export const MyArrowIcon: React.FC<Props> = (props) => {
  let arrow

  switch (props.direction) {
    case 'up':
      arrow = <ArrowUpOutlined />
      return arrow
    case 'right':
      arrow = <ArrowRightOutlined />
      return arrow
    case 'down':
      arrow = <ArrowDownOutlined />
      return arrow
    case 'left':
      arrow = <ArrowLeftOutlined />
  }

  return <div>{arrow}</div>
}
