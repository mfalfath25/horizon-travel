import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import PrivateOutlet from '@/routes/PrivateOutlet'
import ErrorPage from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import RegisterPage from '@/pages/RegisterPage'
import TouristPage from '@/pages/TouristPage'
import ProfilePage from '@/pages/ProfilePage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      {
        element: <PrivateOutlet />,
        children: [
          { path: '/', element: <DashboardPage /> },
          { path: '/profile/:userId', element: <ProfilePage /> },
          { path: '/tourist', element: <TouristPage /> },
        ],
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
])
