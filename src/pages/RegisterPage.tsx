import RegisterForm from '@/components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-50px)] flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold text-blue-500">Register</h1>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
