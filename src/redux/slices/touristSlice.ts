import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tourist } from '@/types/types'
import { RootState } from '@/redux/store'
import { touristApi } from '../services/touristApi'

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
    resetTourist: () => initialState,
  },
  extraReducers(builder) {
    builder.addMatcher(
      touristApi.endpoints.getTouristById.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id
        state.tourist_email = payload.tourist_email
        state.tourist_profilepicture = payload.tourist_profilepicture
        state.tourist_location = payload.tourist_location
        state.tourist_name = payload.tourist_name
      },
    ),
      builder.addMatcher(
        touristApi.endpoints.EditTourist.matchFulfilled,
        (state, { payload }) => {
          state.id = payload.id
          state.tourist_email = payload.tourist_email
          state.tourist_profilepicture = payload.tourist_profilepicture
          state.tourist_location = payload.tourist_location
          state.tourist_name = payload.tourist_name
        },
      )
  },
})

export const {
  setId,
  setEmail,
  setProfilePicture,
  setLocation,
  setName,
  resetTourist,
} = touristSlice.actions

export const selectTourist = (state: RootState) => state.touristState

export default touristSlice.reducer
