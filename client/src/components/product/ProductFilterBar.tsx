import React, { useState, useEffect } from 'react'
import { RefreshIcon, FilterIcon } from '@heroicons/react/solid'
import { useGetProductListQuery } from '../../redux/rtkQuery/productListApiSlice'

const ProductFilterBar = ({ setProductQueryParams, productQueryParams }: any) => {
  return (
    <>
      <div className='my-4 py-4 border-b-[1px] flex justify-start items-center'>
        <div
          className='flex justify-start items-center h-12 px-2 bg-indigo-100 text-indigo-500 w-fit rounded-lg cursor-pointer'
          onClick={() => {
            setProductQueryParams((state: any) => {
              return { ...state, category: '' }
            })
          }}
        >
          <RefreshIcon className='h-5 w-5' />
          <p className='ml-2'>Reset Filter</p>
        </div>
        <div className='ml-4 h-12 px-2 bg-rose-100 rounded-lg text-rose-500 flex items-center'>
          <FilterIcon className='h-5 w-5' />
          <select
            value={productQueryParams.category}
            name='categoryList'
            id='categoryList'
            className=' bg-rose-100 rounded-lg text-rose-500 ml-2'
            onChange={(e) => {
              setProductQueryParams((state: any) => {
                return { ...state, category: e.target.value }
              })
            }}
          >
            <option value=''>Select A Category</option>
            <option value='Appliance'>Appliances</option>
            <option value='Computers'>Computers & Laptops</option>
            <option value='Gaming'>Gaming</option>
            <option value='Phone'>Phones</option>
            <option value='Wearable'>Wearables</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default ProductFilterBar