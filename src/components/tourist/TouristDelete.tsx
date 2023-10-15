import { useDeleteTouristMutation } from '@/redux/services/touristApi'
import { useEffect } from 'react'
import { BiError } from 'react-icons/bi'
import { ToastAlert } from '../ui/ToastAlert'

interface Props {
  close: () => void
  touristId?: string
}

const TouristDelete = ({ close, touristId }: Props) => {
  const [deleteTourist, { isSuccess, isError }] = useDeleteTouristMutation()

  const handleDelete = async () => {
    await deleteTourist(touristId)
  }

  useEffect(() => {
    if (isSuccess) {
      ToastAlert('Delete tourist success', 'success')
      close()
    }
    if (isError) ToastAlert('Delete tourist failed', 'error')
  }, [isSuccess, isError, close])

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2">
      <BiError size={48} className="text-error" />
      <p>
        You are going to delete a tourist with the id
        <br />
        {touristId}
      </p>
      <div className="flex flex-row gap-4">
        <button
          onClick={close}
          className="btn btn-md btn-neutral hover:btn-primary"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-md btn-outline hover:btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TouristDelete
