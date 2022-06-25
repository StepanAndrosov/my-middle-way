import { Ledger } from '../Ledger/Ledger'
import style from './TypescriptCoursre.module.css'

export const TypescriptCourse: React.FC = () => {
  return (
    <div className={style.Course}>
      <h1>TypeScript Course</h1>
      <Ledger />
    </div>
  )
}
