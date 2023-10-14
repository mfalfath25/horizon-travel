import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { resetUser, selectUser } from '@/redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector(selectUser)

  const handleLogout = () => {
    dispatch(resetUser())
  }

  return (
    <>
      <div>DashboardPage</div>
      <button
        onClick={() => {
          navigate(`profile/${user?.id}`)
        }}
      >
        Profile
      </button>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default DashboardPage
