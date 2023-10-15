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
    <div className="flex flex-col gap-8 rounded-lg border-2 border-slate-400 bg-slate-200 px-6 py-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="name"
              name="name"
              autoFocus
              required
              autoComplete="name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              name="password"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-md text-lg">
          Submit
        </button>
      </form>
      <div className="flex">
        <p>Already registered?&nbsp;</p>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => {
            navigate('/login')
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default RegisterForm
