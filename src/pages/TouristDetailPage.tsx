import TouristDetail from '@/components/tourist/TouristDetail'
import EditTouristForm from '@/components/tourist/forms/EditTouristForm'
import { useGetTouristByIdQuery } from '@/redux/services/touristApi'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

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

  return <>{data ? renderPage() : <p>Loading...</p>}</>
}

export default TouristDetailPage
