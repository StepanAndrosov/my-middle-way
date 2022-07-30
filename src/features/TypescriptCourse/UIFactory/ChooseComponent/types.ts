
import {MyArrowIcon} from '../../../../components/ui/ArrowIcon/MyArrowIcon'
import {Alert, Button} from 'antd'



type ButtonType = typeof Button
type AlertType = typeof Alert
type Arrow = typeof MyArrowIcon

type MyComponents = ButtonType | AlertType | Arrow

type CompNames = 'Button' | 'Alert' | 'Arrow'

type BtnProps = 'primary' | 'default'
type AlertProps = 'success' | 'info' | 'warning' | 'error'
type ArrowProps = 'up' | 'right' | 'left' | 'down'

type UnionProps = BtnProps | AlertProps | ArrowProps


interface UiFactory {
    button: ButtonType;
    alert: AlertType;
    arrow: Arrow;
  }
 


export type {
    UiFactory,
    MyComponents,
    CompNames,
    UnionProps,
    BtnProps,  AlertProps,  ArrowProps
}