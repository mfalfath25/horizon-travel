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
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
      <div className="mx-auto flex h-auto w-auto max-w-sm flex-wrap items-start justify-center gap-4 rounded-md bg-slate-200 p-4 md:flex-nowrap md:rounded-tl-[3rem]">
        <img
          src={user?.avatar}
          alt="User Avatar"
          className="h-52 w-52 rounded-md object-cover md:rounded-tl-[2.5rem]"
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
