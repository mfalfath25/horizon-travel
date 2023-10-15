import TouristsTable from '@/components/tourist/TouristsTable'
import { useAppDispatch } from '@/redux/hooks'
import { useGetTouristsQuery } from '@/redux/services/touristApi'
import { Tourist } from '@/types/types'
import { useEffect, useState } from 'react'

const TouristPage = () => {
  // const [tourists, setTourists] = useState<Tourist[]>([])
  // const { data, isSuccess } = useGetTouristsQuery({})

  // useEffect(() => {
  //   if (isSuccess) {
  //     setTourists(data)
  //   }
  // }, [data, isSuccess])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-10 items-center justify-end align-middle">
        <button className="btn btn-primary btn-sm rounded-md">
          Add Tourist
        </button>
      </div>
      <TouristsTable />
    </div>
  )
}

export default TouristPage
