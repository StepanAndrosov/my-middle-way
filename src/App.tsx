import React from 'react'
import './App.css'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { Home, Header as MyHeader } from './components'
import {
  TSCourse,
  Algorithms,
  RegEx,
  Networks,
  Solidity,
} from './features'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <span>learn react</span>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <MyHeader />
        </Header>
        <Content
          className="site-content"
          style={{
            height: '100%',
          }}
        >
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/typescript" element={<TSCourse />} />
              <Route path="/algorithms" element={<Algorithms />} />
              <Route path="/regex" element={<RegEx />} />
              <Route path="/networks" element={<Networks />} />
              <Route path="/solidity" element={<Solidity />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            marginTop: 'auto',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </div>
  )
}

export default App
