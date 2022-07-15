import {MyButton} from '../../../../components/ui/Button/MyButtton'
import {MySelect} from '../../../../components/ui/Select/MySelect'
import {MyArrowIcon} from '../../../../components/ui/ArrowIcon/MyArrowIcon'

type Button = typeof MyButton
type Select = typeof MySelect
type Arrow = typeof MyArrowIcon

interface UiFactory {
    button: () => Button;
    select: () => Select;
    arrow: () => Arrow;
  }

export type {
    UiFactory
}