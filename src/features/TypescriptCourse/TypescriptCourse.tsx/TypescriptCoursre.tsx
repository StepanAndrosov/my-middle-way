import { APITest } from '../APITest/APITest'
import { Ledger } from '../Ledger/Ledger'
import { UIFactory } from '../UIFactory/UIFactory'
import style from './TypescriptCoursre.module.css'

export const TypescriptCourse: React.FC = () => {
  return (
    <div className={style.Course}>
      <h1>TypeScript Course</h1>
      <Ledger />
      <UIFactory />
      <APITest />
    </div>
  )
}
