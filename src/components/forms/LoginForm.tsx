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
    <div className="flex flex-col gap-8 rounded-lg border-2 border-slate-400 bg-slate-200 px-6 py-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoFocus
            required
            autoComplete="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-md text-lg">
          Submit
        </button>
      </form>
      <div className="flex">
        <p>No account?&nbsp;</p>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => {
            navigate('/register')
          }}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default LoginForm
