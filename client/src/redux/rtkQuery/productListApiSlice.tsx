import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productListApiSlice = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_PORT}`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*')
      return headers
    },
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  tagTypes: ['Project'],
  refetchOnMountOrArgChange: 1,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: function (builder) {
    return {
      getProductList: builder.query({
        query: (condition) => {
          return `/xenelectronic/api_v1/public/products?count=${condition.count || 0}&category=${
            condition.category || ''
          }`
        },
        // transformResponse : res => res.sort((a,b) => b.phaseOrder - a.phaseOrder),
        providesTags: ['Project'],
      }),
      addProduct: builder.mutation({
        query: (project) => ({
          url: '/project/create',
          method: 'POST',
          body: project,
        }),
        invalidatesTags: ['Project'],
      }),
    }
  },
})

export const { useGetProductListQuery, useAddProductMutation } = productListApiSlice
