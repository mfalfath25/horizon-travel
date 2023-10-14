import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userApi } from '@/redux/services/userApi'
import { touristApi } from '@/redux/services/touristApi'
import userSlice from '@/redux/slices/userSlice'
import touristSlice from '@/redux/slices/touristSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// persist config
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  // slices reducer
  userState: userSlice,
  touristState: touristSlice,
  // services reducer
  [userApi.reducerPath]: userApi.reducer,
  [touristApi.reducerPath]: touristApi.reducer,
})

// persist rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, touristApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
