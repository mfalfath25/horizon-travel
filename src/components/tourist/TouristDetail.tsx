import { Tourist } from '@/types/types'

interface Props {
  tourist?: Tourist
}

const TouristDetail = ({ tourist }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row gap-4 rounded-md border-2 border-slate-300 bg-slate-200 p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <img
            src={tourist?.tourist_profilepicture}
            alt="Tourist Avatar"
            className="h-30 w-30 mx-auto rounded-md object-cover"
          />
          <div className="flex flex-col gap-2">
            <span>
              <p className="text-slate-500">TourisId</p>
              <p>{tourist?.id}</p>
            </span>
            <span>
              <p className="text-slate-500">Name</p>
              <p>{tourist?.tourist_name}</p>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span>
              <p className="text-slate-500">Email</p>
              <p>{tourist?.tourist_email}</p>
            </span>
            <span>
              <p className="text-slate-500">Location</p>
              <p>{tourist?.tourist_location}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TouristDetail
