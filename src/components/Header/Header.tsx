import { Col, Row } from 'antd'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  let activeStyle = {
    opacity: 1,
  }

  return (
    <div className={style.Header}>
      <Row>
        <Col span={6}>
          <NavLink
            to="typesript"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            TypeScript
          </NavLink>
        </Col>

        <Col span={6}>
          <NavLink
            to="algotithms"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Algorithms
          </NavLink>
        </Col>
        <Col span={6}>
          <NavLink
            to="regex"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Regular expression
          </NavLink>
        </Col>

        <Col span={6}>
          <NavLink
            to="networks"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Networks
          </NavLink>
        </Col>
      </Row>
    </div>
  )
}
