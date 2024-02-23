import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from './AppContainer'
import './index.css'
import { theme } from './theme/theme'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
        <ThemeProvider theme={theme}>
          <AppContainer/>
        </ThemeProvider>
  </React.StrictMode>,
)
