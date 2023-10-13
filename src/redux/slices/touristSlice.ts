import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Tourist } from '@/types/types'

const initialState: Tourist = {
  id: '',
  tourist_email: '',
  tourist_profilepicture: '',
  tourist_location: '',
  tourist_name: '',
}

const touristSlice = createSlice({
  name: 'tourist',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.tourist_email = action.payload
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.tourist_profilepicture = action.payload
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.tourist_location = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.tourist_name = action.payload
    },
  },
})

export const { setId, setEmail, setProfilePicture, setLocation, setName } =
  touristSlice.actions

export const selectTourist = (state: RootState) => state.touristState

export default touristSlice.reducer
