import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import PrivateOutlet from '@/routes/PrivateOutlet'
import ErrorPage from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'
import Layout from '@/pages/Layout'
import RegisterPage from '@/pages/RegisterPage'
import TouristPage from '@/pages/TouristPage'
import ProfilePage from '@/pages/ProfilePage'
import TouristDetailPage from '@/pages/TouristDetailPage'

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
          {
            path: '/',
            element: <Layout />,
            children: [
              { path: '/profile/:userId', element: <ProfilePage /> },
              {
                path: '/tourist',
                element: <TouristPage />,
              },
              {
                path: '/tourist/:touristId',
                element: <TouristDetailPage />,
              },
              {
                path: '/tourist/add',
                element: <TouristDetailPage />,
              },
              {
                path: '/tourist/edit/:touristId',
                element: <TouristDetailPage />,
              },
            ],
          },
        ],
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
])
