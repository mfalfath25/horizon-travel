import { useGetTouristsQuery } from '@/redux/services/touristApi'
import { Tourist } from '@/types/types'
import { useEffect, useState } from 'react'
import { BiEdit, BiTrash, BiDetail } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Modals from '../ui/Modals'
import TouristDelete from './TouristDelete'

const TouristsTable = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const { data: tourists = [] } = useGetTouristsQuery(page)

  const [selectedTouristId, setSelectedTouristId] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const openDeleteModal = (touristId: string) => {
    setSelectedTouristId(touristId)
    setIsDeleteModalOpen(true)
  }

  const closeModal = () => {
    setIsDeleteModalOpen(false)
  }

  useEffect(() => {
    console.log(page)
  }, [tourists, page])

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
                    <td>{index + 1 + (page - 1) * 10}</td>
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
                        <button
                          onClick={() => openDeleteModal(tourist.id)}
                          className="btn btn-error btn-xs gap-1 rounded-md hover:text-white"
                        >
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

      <div className="flex flex-row items-center justify-center gap-2 pt-2">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-outline btn-xs btn-square"
        >
          {'<'}
        </button>
        <p>{page}</p>
        <button
          disabled={tourists.length < 10}
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-outline btn-xs btn-square"
        >
          {'>'}
        </button>
      </div>

      <Modals
        isOpen={isDeleteModalOpen}
        onClose={closeModal}
        title="Confirm Delete"
      >
        {isDeleteModalOpen && selectedTouristId && (
          <TouristDelete close={closeModal} touristId={selectedTouristId} />
        )}
      </Modals>
    </section>
  )
}

export default TouristsTable
