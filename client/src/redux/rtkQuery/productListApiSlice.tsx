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
  tagTypes: ['Product'],
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
        providesTags: ['Product'],
      }),
      addProduct: builder.mutation({
        query: (product) => ({
          url: '/project/create',
          method: 'POST',
          body: product,
        }),
        invalidatesTags: ['Product'],
      }),
      verifyCart: builder.mutation({
        query: (productIdList) => ({
          url: '/xenelectronic/api_v1/public/verifycart',
          method: 'POST',
          body: productIdList,
        }),
        invalidatesTags: ['Product'],
      }),
    }
  },
})

export const { useGetProductListQuery, useAddProductMutation, useVerifyCartMutation } =
  productListApiSlice
