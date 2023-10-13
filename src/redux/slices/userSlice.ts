import { User } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: User = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  isLogged: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload
    },
  },
})

export const { setId, setName, setEmail, setAvatar, setIsLogged } =
  userSlice.actions

export const selectUser = (state: { user: User }) => state.user

export default userSlice.reducer
