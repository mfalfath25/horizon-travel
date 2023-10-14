import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const PrivateOutlet = () => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.token) {
      navigate('/login', {
        state: { from: location.pathname },
      })
    }
  }, [location, auth, navigate])

  return auth.token ? <Outlet /> : null
}

export default PrivateOutlet
