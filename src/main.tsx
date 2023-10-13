import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routes } from '@/routes/router'
import { store } from '@/redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={routes} />
    </ReduxProvider>
  </React.StrictMode>,
)
