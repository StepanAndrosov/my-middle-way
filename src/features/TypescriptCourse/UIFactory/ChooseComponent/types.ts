import {MyButton} from '../../../../components/ui/Button/MyButtton'
import {MyArrowIcon} from '../../../../components/ui/ArrowIcon/MyArrowIcon'
import {Alert} from 'antd'


type ButtonType = typeof MyButton
type AlertType = typeof Alert
type Arrow = typeof MyArrowIcon

type MyComponents = ButtonType | AlertType | Arrow

type CompNames = 'Button' | 'Alert' | 'Arrow'

type getComponent = {
  getComponent: (name: CompNames) => MyComponents
}

interface UiFactory {
    button: ButtonType;
    alert: AlertType;
    arrow: Arrow;
  }
 


export type {
    UiFactory,
    MyComponents,
    CompNames,
    getComponent
}