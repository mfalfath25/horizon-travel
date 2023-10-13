import React, { useEffect } from 'react'
import { LoginRequest, usePostUserAuthMutation } from '@/redux/services/userApi'
import { useLocation, useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
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
    if (isSuccess) {
      const { state } = location
      if (state && state.from) {
        // If there is an intended route, navigate to it
        navigate(state.from)
      } else {
        // If there's no intended route, navigate to the default route
        navigate('/')
      }
    }
  }, [isSuccess, navigate, location])

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
