import React, { useEffect } from 'react'
import { LoginRequest, usePostUserAuthMutation } from '@/redux/services/userApi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const LoginForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [postUserAuth, { isSuccess }] = usePostUserAuthMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const formValues: LoginRequest = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    postUserAuth(formValues)
  }

  useEffect(() => {
    const { state } = location
    if (auth.token) navigate('/', { replace: true }) // prevent auth user to access login page
    if (isSuccess) {
      if (state.from) navigate(state.from) // redirect to previous page if any
      else navigate('/', { replace: true }) // redirect to home page
    }
  }, [isSuccess, navigate, location, auth.token])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" autoFocus required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm
