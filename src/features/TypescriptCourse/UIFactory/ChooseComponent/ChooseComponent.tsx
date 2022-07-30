import { Alert, Button, Card } from 'antd'
import { MyArrowIcon } from '../../../../components/ui/ArrowIcon/MyArrowIcon'
import style from '../UIFactory.module.css'
import { CompNames } from './types'

type Props = {
  component: CompNames
}

export const ChooseComponent: React.FC<Props> = ({ component }) => {
  const switchComponent = (component: CompNames): React.ReactNode => {
    switch (component) {
      case 'Button':
        return <Button type="primary">Primary Button</Button>
      case 'Alert':
        return <Alert message="Success Alert" />
      case 'Arrow':
        return <MyArrowIcon direction="up" />
    }
  }

  return (
    <div className={style.component}>
      <Card>{switchComponent(component)}</Card>
    </div>
  )
}
