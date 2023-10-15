import { useMemo } from 'react'
import { User } from '@/types/types'
import { useAppDispatch } from '@/redux/hooks'
import { resetUser } from '@/redux/slices/userSlice'
import { HiLogout } from 'react-icons/hi'
import { resetTourist } from '@/redux/slices/touristSlice'

interface NavbarProps {
  user: User | null
}

const Navbar = ({ user }: NavbarProps) => {
  const dispatch = useAppDispatch()

  const NavItems = useMemo(() => {
    return [
      {
        label: 'Home',
        path: `/`,
      },
      {
        label: 'Profile',
        path: `/profile/${user?.id}`,
      },
      {
        label: 'Tourists',
        path: `/tourist`,
      },
    ]
  }, [user])

  const handleLogout = () => {
    dispatch(resetUser())
    dispatch(resetTourist())
  }

  return (
    <div className="border-b-[1px] border-slate-400 bg-white">
      <div className="mx-auto flex max-w-4xl flex-row justify-between gap-2 p-2">
        <ul className="flex gap-2">
          {NavItems.map((item, index) => (
            <a key={index} href={item.path}>
              <li className="btn btn-ghost btn-sm hover:btn-primary rounded-md">
                {item.label}
              </li>
            </a>
          ))}
        </ul>
        <button
          className="btn btn-ghost btn-sm rounded-md hover:bg-red-400 hover:text-white"
          onClick={handleLogout}
        >
          Logout
          <HiLogout />
        </button>
      </div>
    </div>
  )
}

export default Navbar
