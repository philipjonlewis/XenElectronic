import React from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const ProductCard = ({ product }) => {
  const { product_title, product_price, product_image, product_rating } = product
  const starCount = Math.ceil(product_rating.rate)

  return (
    <div className='bg-slate-50 h-100 rounded-lg p-2 shadow-sm relative flex flex-col'>
      <div className='absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer shadow-sm'>
        <div>
          <HeartIcon className='w-6 h-6 text-indigo-500' />
        </div>
      </div>
      <div className='bg-blue-100 w-full h-64 rounded-lg overflow-hidden flex justify-center items-center'>
        <img src={product_image} alt='' className='object-cover h-36' />
      </div>
      <div className='mt-2'>
        <p className='font-bold text-xl'>{(product_title as string).substring(0, 16)}</p>
      </div>
      <div className=''>
        <p className='text-rose-500 font-semibold text-lg'>$ {product_price}</p>
      </div>
      <div className='flex '>
        <div className=' flex items-center'>
          {starCount >= 1 &&
            [...Array(starCount)].map(() => {
              return <StarIcon className='h-5 w-5 text-yellow-500' />
            })}
        </div>
        <div className='bg-blue-100 flex ml-2 py-1 px-2 rounded-lg'>
          <p className='text-sm text-blue-500 font-bold'>{starCount}</p>
        </div>
      </div>
      <div className='mt-auto bg-blue-500 w-fit ml-auto py-3 px-4 rounded-xl cursor-pointer shadow-sm'>
        <p className='font-semibold text-sm text-white '>Add To Cart</p>
      </div>
    </div>
  )
}

export default ProductCard
