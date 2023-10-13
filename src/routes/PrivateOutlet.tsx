import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const PrivateOutlet = () => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.token) {
      // If the user is not authenticated and tries to access a protected route,
      // redirect them to the login page and remember the intended route.
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        navigate('/login', { state: { from: location.pathname } })
      }
    }
  }, [location, auth, navigate])

  return auth.token ? (
    <Outlet />
  ) : // Redirect to /login if the user is not authenticated
  null
}

export default PrivateOutlet
