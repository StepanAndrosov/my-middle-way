import { Col, Row } from 'antd'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { HomeOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('', 'menu', <MenuUnfoldOutlined />, [
    getItem(
      <NavLink to="/">
        <HomeOutlined />
      </NavLink>,
      'home'
    ),
    getItem(<NavLink to="typescript">TypeScript</NavLink>, 'typescript'),
    getItem(<NavLink to="algorithms">Algorithms</NavLink>, 'algorithms'),
    getItem(<NavLink to="regex">Regular expression</NavLink>, 'regex'),
    getItem(<NavLink to="networks">Networks</NavLink>, 'networks'),
  ]),
]

export const Header = () => {
  let activeStyle = {
    opacity: 1,
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }

  return (
    <div className={style.Header}>
      <Row className={style.Row}>
        <Col span={1}>
          <NavLink to="/">
            <HomeOutlined />
          </NavLink>
        </Col>
        <Col span={4}>
          <NavLink
            to="typescript"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            TypeScript
          </NavLink>
        </Col>

        <Col span={4}>
          <NavLink
            to="algorithms"
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
        <Col span={4}>
          <NavLink
            to="networks"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Networks
          </NavLink>
        </Col>
      </Row>
      <Menu
        className={style.Menu}
        theme="dark"
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['menu']}
        mode="inline"
        onClick={onClick}
        items={items}
      />
    </div>
  )
}
