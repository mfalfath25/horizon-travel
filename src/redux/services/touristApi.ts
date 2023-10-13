import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const touristApi = createApi({
  reducerPath: 'touristApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://biroperjalanan.datacakra.com',
  }),
  endpoints: (builder) => ({
    getTourists: builder.query({
      query: () => `/api/tourist`,
    }),
    getTouristById: builder.query({
      query: (id) => `/api/tourist/${id}`,
    }),
    postAddTourist: builder.mutation({
      query: (body) => ({
        url: '/api/tourist',
        method: 'POST',
        body,
      }),
    }),
    putEditTourist: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/tourist/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteTourist: builder.mutation({
      query: (id) => ({
        url: `/api/tourist/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useGetTouristsQuery, useGetTouristByIdQuery } = touristApi
