import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/redux/store'
import { User } from '@/types/types'

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint === 'getUserById') {
        const token = (getState() as RootState).userState.token
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    postUserAuth: builder.mutation({
      query: (body) => ({
        url: '/api/authaccount/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    postUserRegister: builder.mutation({
      query: (body) => ({
        url: '/api/authaccount/registration',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    getUserById: builder.query({
      query: (userId) => ({
        url: `/api/users/${userId}`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
})

export const {
  usePostUserAuthMutation,
  usePostUserRegisterMutation,
  useGetUserByIdQuery,
} = userApi
