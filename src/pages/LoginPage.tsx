import LoginForm from '@/components/forms/LoginForm'

const LoginPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-50px)] flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold text-blue-500">Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage
