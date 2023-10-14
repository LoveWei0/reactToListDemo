import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@style/reset.css'
import './style/index.css'
import '@style/common.css'
// redux
import { Provider } from 'react-redux'
// store
import store from './store/index.ts'
// react-router-dom
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
