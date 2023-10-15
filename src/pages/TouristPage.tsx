import { useState } from 'react'
import TouristsTable from '@/components/tourist/TouristsTable'
import AddTouristForm from '@/components/tourist/forms/AddTouristForm'
import Modals from '@/components/ui/Modals'

const TouristPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const openAddModal = () => {
    setIsAddModalOpen(true)
  }

  const closeModal = () => {
    setIsAddModalOpen(false)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-10 items-center justify-end align-middle">
        <button
          onClick={openAddModal}
          className="btn btn-primary btn-sm rounded-md"
        >
          Add Tourist
        </button>
      </div>
      <TouristsTable />

      <Modals isOpen={isAddModalOpen} onClose={closeModal} title="Add Tourist">
        <AddTouristForm />
      </Modals>
    </div>
  )
}

export default TouristPage
