import { useDeleteTouristMutation } from '@/redux/services/touristApi'
import { useEffect } from 'react'
import { BiError } from 'react-icons/bi'

interface Props {
  close: () => void
  touristId?: string
}

const TouristDelete = ({ close, touristId }: Props) => {
  const [deleteTourist, { isSuccess }] = useDeleteTouristMutation()

  const handleDelete = async () => {
    await deleteTourist(touristId)
  }

  useEffect(() => {
    if (isSuccess) close()
  }, [isSuccess, close])

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
