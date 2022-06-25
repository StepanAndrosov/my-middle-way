import React from 'react'
import './App.css'
import { Layout } from 'antd'
import { NavLink } from 'react-router-dom'
import { Home, Header as MyHeader } from './components'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <Content>
          <Home />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
