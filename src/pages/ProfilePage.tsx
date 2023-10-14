import { useGetUserByIdQuery } from '@/redux/services/userApi'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { selectUser } from '@/redux/slices/userSlice'

const ProfilePage = () => {
  const { userId } = useParams()
  const { data } = useGetUserByIdQuery(userId)
  const { user } = useAppSelector(selectUser)

  useEffect(() => {}, [data])

  return (
    <>
      <div>ProfilePage</div>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}

export default ProfilePage
