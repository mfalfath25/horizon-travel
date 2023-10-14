import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/redux/store'

export const touristApi = createApi({
  reducerPath: 'touristApi',
  tagTypes: ['Tourist'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userState.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTourists: builder.query({
      query: () => `/api/tourist`,
      providesTags: ['Tourist'],
    }),
    getTouristById: builder.query({
      query: (id) => `/api/tourist/${id}`,
      providesTags: ['Tourist'],
    }),
    postAddTourist: builder.mutation({
      query: (body) => ({
        url: '/api/tourist',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tourist'],
    }),
    putEditTourist: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/tourist/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Tourist'],
    }),
    deleteTourist: builder.mutation({
      query: (id) => ({
        url: `/api/tourist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tourist'],
    }),
  }),
})

export const { useGetTouristsQuery, useGetTouristByIdQuery } = touristApi
