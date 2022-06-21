import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Browser } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    box-sizing: border-box;
    color: #FFFFFF;
  }
`
const theme = {
  colors: {
    purple: '#C241FF',
    blue: '#4BC9F0',
    red: '#EF466F',
    lightBlack: '#141416',
    mediumBlack: '#171717',
    gray: '#353945',
    lightGray: '#DADADA',
    yellow: '#FFD166',
    green: '#45B26B',
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Browser>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </Provider>
    </Browser>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
