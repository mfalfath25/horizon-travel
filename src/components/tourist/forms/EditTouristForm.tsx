import React, { useState } from 'react'
import {
  TouristRequest,
  useEditTouristMutation,
} from '@/redux/services/touristApi'
import { Tourist } from '@/types/types'
import { useParams } from 'react-router-dom'

interface Props {
  tourist?: Tourist
}

const EditTouristForm = ({ tourist }: Props) => {
  const [EditTourist] = useEditTouristMutation()
  const { touristId } = useParams()
  const [form, setForm] = useState<TouristRequest | undefined>({
    tourist_email: tourist?.tourist_email || '',
    tourist_location: tourist?.tourist_location || '',
    tourist_name: tourist?.tourist_name || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const formValues: TouristRequest = {
      tourist_email: formData.get('tourist_email') as string,
      tourist_location: formData.get('tourist_location') as string,
      tourist_name: formData.get('tourist_name') as string,
    }

    await EditTourist({ id: touristId, body: formValues })
  }

  return (
    <div className="flex flex-col gap-8 rounded-lg border-2 border-slate-400 bg-slate-200 px-6 py-4">
      <form
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
              defaultValue={form?.tourist_email}
              autoFocus
              required
              onChange={handleChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="tourist_location">
            Location
            <input
              id="tourist_location"
              type="text"
              name="tourist_location"
              defaultValue={form?.tourist_location}
              required
              onChange={handleChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="tourist_name">
            Name
            <input
              id="tourist_name"
              type="text"
              name="tourist_name"
              defaultValue={form?.tourist_name}
              required
              onChange={handleChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-md text-lg">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditTouristForm
