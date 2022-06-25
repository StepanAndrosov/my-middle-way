import { Col, Row } from 'antd'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

export const Header = () => {
  let activeStyle = {
    opacity: 1,
  }

  return (
    <div className={style.Header}>
      <Row>
        <Col span={1}>
          <NavLink to="/">
            <HomeOutlined />
          </NavLink>
        </Col>
        <Col span={3}>
          <NavLink
            to="typescript"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            TypeScript
          </NavLink>
        </Col>

        <Col span={3}>
          <NavLink
            to="algorithms"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Algorithms
          </NavLink>
        </Col>
        <Col span={3}>
          <NavLink
            to="regex"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Regular expression
          </NavLink>
        </Col>
        <Col span={3}>
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
