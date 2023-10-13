import { useAppSelector } from '@/redux/hooks'
import { selectCount } from '@/redux/slices/counterSlice'

const LoginPage = () => {
  const state = useAppSelector(selectCount)

  return <div>LoginPage {state.value}</div>
}

export default LoginPage
