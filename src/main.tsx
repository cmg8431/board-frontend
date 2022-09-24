import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { RecoilRoot } from 'recoil'

import { App } from './App'
import { globalStyles } from './styles'

if (typeof window !== 'undefined') {
  injectStyle()
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
)
