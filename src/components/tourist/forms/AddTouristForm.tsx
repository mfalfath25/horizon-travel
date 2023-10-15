import {
  TouristRequest,
  usePostAddTouristMutation,
} from '@/redux/services/touristApi'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTouristForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [postAddTourist, { isSuccess }] = usePostAddTouristMutation()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const formValues: TouristRequest = {
      tourist_profilepicture: '',
      tourist_email: formData.get('tourist_email') as string,
      tourist_location: formData.get('tourist_location') as string,
      tourist_name: formData.get('tourist_name') as string,
    }

    await postAddTourist(formValues)

    if (formRef.current) {
      formRef.current.reset()
    }
  }

  useEffect(() => {
    if (isSuccess) console.log('success')
  }, [isSuccess, navigate])

  return (
    <div className="flex flex-col gap-8 rounded-lg border-2 border-slate-400 bg-slate-200 px-6 py-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="tourist_email">
            Email
            <input
              id="tourist_email"
              type="email"
              name="tourist_email"
              autoFocus
              required
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="tourist_location">
            Location
            <input
              id="tourist_location"
              type="text"
              name="tourist_location"
              required
              placeholder="Location"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="tourist_name">
            Name
            <input
              id="tourist_name"
              type="text"
              name="tourist_name"
              required
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-md text-lg">
          Add Tourist
        </button>
      </form>
    </div>
  )
}

export default AddTouristForm
