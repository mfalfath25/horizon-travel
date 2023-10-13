import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import PrivateOutlet from '@/routes/PrivateOutlet'
import ErrorPage from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import RegisterPage from '@/pages/RegisterPage'
import TouristPage from '@/pages/TouristPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PrivateOutlet />,
        children: [
          { path: '/', element: <DashboardPage /> },
          { path: '/tourist', element: <TouristPage /> },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
        index: true,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
])
