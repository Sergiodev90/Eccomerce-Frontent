import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App'
import { Layout } from './Layout'
import { ShoppingCartProvider } from './context'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout >
    <ShoppingCartProvider>

      <App />
      </ShoppingCartProvider>

    </Layout>
  </React.StrictMode>
)
