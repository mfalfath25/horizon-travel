import LoginForm from '@/components/forms/LoginForm'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      <p>No account?</p>
      <button
        onClick={() => {
          navigate('/register')
        }}
      >
        Register
      </button>
    </div>
  )
}

export default LoginPage
