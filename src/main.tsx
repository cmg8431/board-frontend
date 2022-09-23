import { Global } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { globalStyles } from './styles'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
)
