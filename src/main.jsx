import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes/index.jsx'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'

import theme from './styles/theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
