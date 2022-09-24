import { Global } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import { App } from './App'
import { globalStyles } from './styles'

if (typeof window !== 'undefined') {
  injectStyle()
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
    <ToastContainer />
  </React.StrictMode>
)
