import { useGetTouristsQuery } from '@/redux/services/touristApi'
import { Tourist } from '@/types/types'
import { BiEdit, BiTrash, BiDetail } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const TouristsTable = () => {
  const navigate = useNavigate()
  const { data: tourists } = useGetTouristsQuery({})

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table-sm table rounded-md bg-slate-200">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tourists
              ? tourists.data?.map((tourist: Tourist, index: number) => (
                  <tr key={tourist.id} className="hover:bg-slate-200">
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="mask mask-circle h-8 w-8 bg-black">
                          <img
                            src={tourist.tourist_profilepicture}
                            alt="Avatar Tailwind CSS Component"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold">
                            {tourist.tourist_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{tourist.tourist_email}</td>
                    <td>{tourist.tourist_location}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            navigate(`/tourist/${tourist.id}`)
                          }}
                          className="btn btn-primary btn-xs gap-1 rounded-md"
                        >
                          Details <BiDetail />
                        </button>
                        <button
                          onClick={() => {
                            navigate(`/tourist/edit/${tourist.id}`)
                          }}
                          className="btn btn-secondary btn-xs gap-1 rounded-md"
                        >
                          Edit <BiEdit />
                        </button>
                        <button className="btn btn-error btn-xs gap-1 rounded-md hover:text-white">
                          Delete <BiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TouristsTable
