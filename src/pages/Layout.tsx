import Navbar from '@/components/ui/Navbar'
import Title from '@/components/ui/Title'
import { useAppSelector } from '@/redux/hooks'
import { selectUser } from '@/redux/slices/userSlice'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const DashboardPage = () => {
  const { user } = useAppSelector(selectUser)

  return (
    <>
      <Navbar user={user} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
        className="container mx-auto min-h-[calc(100vh-100px)] max-w-4xl px-2"
      >
        <Title />
        <Outlet />
      </motion.div>
    </>
  )
}

export default DashboardPage
