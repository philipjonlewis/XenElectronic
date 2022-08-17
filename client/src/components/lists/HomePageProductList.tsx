import React from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'

const HomePageProductList = () => {
  return (
    <div className=''>
      <div className='border-b-[1px] mb-2'>
        <p className='p-2 my-2 text-2xl font-bold border-l-4 border-indigo-500'>All Products</p>
      </div>

      <div className='grid grid-cols-5 gap-4 '>
        <div className='bg-slate-50 h-100 rounded-lg p-2 shadow-sm relative flex flex-col'>
          <div className='absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer shadow-sm'>
            <div>
              <HeartIcon className='w-6 h-6 text-indigo-500' />
            </div>
          </div>
          <div className='bg-yellow-500 w-full h-64 rounded-lg overflow-hidden'>
            <img src='images/landing.jpg' alt='' className='object-cover h-64' />
          </div>
          <div className='mt-2'>
            <p className='font-bold text-xl'>Product Name</p>
          </div>
          <div className=''>
            <p className='text-rose-500 font-semibold text-lg'>$ 300.00</p>
          </div>
          <div className='mt-auto bg-blue-500 w-fit ml-auto py-3 px-4 rounded-xl cursor-pointer shadow-sm'>
            <p className='font-semibold text-sm text-white '>Add To Cart</p>
          </div>
        </div>

        {/* <div className='bg-red-500'>Hello</div> */}
      </div>
    </div>
  )
}

export default HomePageProductList
