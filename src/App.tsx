import React from 'react'
import './App.css'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { Home, Header as MyHeader } from './components'
import { TypescriptCourse, Algorithms, RegEx, Networks } from './features'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <Content style={{ padding: '0 50px', paddingTop: '50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/typescript" element={<TypescriptCourse />} />
              <Route path="/algorithms" element={<Algorithms />} />
              <Route path="/regex" element={<RegEx />} />
              <Route path="/networks" element={<Networks />} />
            </Routes>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
