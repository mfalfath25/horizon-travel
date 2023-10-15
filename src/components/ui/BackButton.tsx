import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm btn-square btn-ghost hover:btn-neutral"
      >
        <BiArrowBack size={20} />
      </button>
    </div>
  )
}

export default BackButton
