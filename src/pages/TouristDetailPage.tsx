import { useEffect } from 'react'
import TouristDetail from '@/components/tourist/TouristDetail'
import EditTouristForm from '@/components/tourist/forms/EditTouristForm'
import { useGetTouristByIdQuery } from '@/redux/services/touristApi'
import { useLocation, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackButton from '@/components/ui/BackButton'

const TouristDetailPage = () => {
  const location = useLocation()
  const { touristId } = useParams()
  const { data } = useGetTouristByIdQuery(touristId)

  useEffect(() => {}, [data])

  const renderPage = () => {
    if (location.pathname.includes('edit')) {
      return <EditTouristForm tourist={data} />
    } else {
      return <TouristDetail tourist={data} />
    }
  }

  // return <>{data ? renderPage() : <p>Loading...</p>}</>
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col gap-2"
    >
      <BackButton />
      {data ? renderPage() : <p>Loading...</p>}
    </motion.div>
  )
}

export default TouristDetailPage
