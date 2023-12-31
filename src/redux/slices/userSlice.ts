import { User } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import { userApi } from '../services/userApi'

type UserState = {
  user: User | null
  token: string | null
}

const initialState: UserState = {
  user: null,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    resetUser: (state) => {
      return { ...state, ...initialState }
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      userApi.endpoints.postUserAuth.matchFulfilled,
      (state, { payload }) => {
        const userData = payload.data
        const user: User = {
          id: userData.Id,
          email: userData.Email,
          name: userData.Name,
          avatar: userData.Avatar ? userData.Avatar : undefined,
        }
        state.user = user
        state.token = payload.data.Token
      },
    ),
      builder.addMatcher(
        userApi.endpoints.getUserById.matchFulfilled,
        (state, { payload }) => {
          if (state.user) {
            state.user.avatar = payload.avatar
          }
        },
      )
  },
})

export const { setUser, setToken, resetUser } = userSlice.actions

export const selectUser = (state: RootState) => state.userState

export default userSlice.reducer
