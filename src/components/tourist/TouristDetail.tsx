import { Tourist } from '@/types/types'

interface Props {
  tourist?: Tourist
}

const TouristDetail = ({ tourist }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div>
        <p>{tourist?.id}</p>
        <p>{tourist?.tourist_name}</p>
        <p>{tourist?.tourist_email}</p>
        <p>{tourist?.tourist_location}</p>
        <img
          src={tourist?.tourist_profilepicture}
          alt="Tourist Avatar"
          className="h-20 w-20 rounded-md object-cover"
        />
      </div>
    </div>
  )
}

export default TouristDetail
