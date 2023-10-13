import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userApi } from '@redux/services/userApi'
import { touristApi } from '@redux/services/touristApi'
import userSlice from '@redux/slices/userSlice'
import counterSlice from '@redux/slices/counterSlice'
import touristSlice from '@redux/slices/touristSlice'

const rootReducer = combineReducers({
  // slices reducer
  userState: userSlice,
  touristState: touristSlice,
  counterState: counterSlice,
  // services reducer
  [userApi.reducerPath]: userApi.reducer,
  [touristApi.reducerPath]: touristApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(userApi.middleware, touristApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
