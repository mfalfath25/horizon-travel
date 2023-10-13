import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://biroperjalanan.datacakra.com',
  }),
  endpoints: (builder) => ({
    postUserAuth: builder.mutation({
      query: (body) => ({
        url: '/api/authaccount/login',
        method: 'POST',
        body,
      }),
    }),
    postUserRegister: builder.mutation({
      query: (body) => ({
        url: '/api/authaccount/registration',
        method: 'POST',
        body,
      }),
    }),
    getUserById: builder.query({
      query: (id) => `/api/users/${id}`,
    }),
  }),
})

export const {
  usePostUserAuthMutation,
  usePostUserRegisterMutation,
  useGetUserByIdQuery,
} = userApi
