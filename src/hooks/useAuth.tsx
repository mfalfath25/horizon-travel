import { useAppSelector } from '@/redux/hooks'
import { selectUser } from '@/redux/slices/userSlice'
import { useMemo } from 'react'

export const useAuth = () => {
  const token = useAppSelector(selectUser).token

  return useMemo(() => ({ token }), [token])
}
