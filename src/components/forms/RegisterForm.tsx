import React, { useEffect } from 'react'
import {
  RegisterRequest,
  usePostUserRegisterMutation,
} from '@/redux/services/userApi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const RegisterForm = () => {
  const [postUserRegister, { isSuccess }] = usePostUserRegisterMutation()
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const formValues: RegisterRequest = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    await postUserRegister(formValues)
  }

  useEffect(() => {
    if (auth.token) navigate('/', { replace: true }) // prevent auth user to access register page
    if (isSuccess) navigate('/login')
  }, [isSuccess, navigate, auth.token])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="name" name="name" autoFocus required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default RegisterForm
