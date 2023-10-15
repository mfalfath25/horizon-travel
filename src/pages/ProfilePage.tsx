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
    <div className="flex items-center justify-center">
      <div className="flex flex-row gap-4 rounded-md border-2 border-slate-300 bg-slate-200 p-4">
        <img
          src={user?.avatar}
          alt="User Avatar"
          className="h-52 w-52 rounded-md object-cover"
        />
        <div className="flex flex-col justify-evenly gap-4">
          <p className="text-2xl text-black">{user?.name}</p>
          <div>
            <span className="text-slate-400">Email</span>
            <p>{user?.email}</p>
          </div>
          <div>
            <span className="text-slate-400">User Id</span>
            <p className="break-all">{user?.id}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
