import React, { useState, useEffect } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import {  addProductToCart, removeProductFromCart } from '../../redux/cartState'
import { toast } from 'react-toastify'

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch()

  const { product_name, product_price, product_image, product_rating } = product
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  useEffect(() => {
    const fromStorage = localStorage.getItem('cartItems') as any
    const parsedFromStorage = JSON.parse(fromStorage)

    if (parsedFromStorage && parsedFromStorage.length >= 1) {
      const isExisting = parsedFromStorage.some((prod) => prod._id == product._id)
      setIsAddedToCart(isExisting)
    }
  }, [])

  const addToCartHandler = () => {
    if (!isAddedToCart) {
      toast.success(`added ${product.product_name.substring(0, 8)} to Cart 😍`)
      dispatch(addProductToCart(product))
      setIsAddedToCart(true)
    } else {
      toast.info(`removed ${product.product_name.substring(0, 8)} from Cart 🥺`)

      dispatch(removeProductFromCart(product._id))
      setIsAddedToCart(false)
    }
  }

  return (
    <div className='bg-slate-50 h-100 rounded-lg p-2  relative flex flex-col hover:shadow-sm'>
      <div className='bg-white w-full h-64 rounded-lg overflow-hidden flex justify-center items-center'>
        <img src={product_image} alt='' className='object-cover h-36' />
      </div>
      <div className='mt-2'>
        <p className='font-bold text-xl'>{(product_name as string).substring(0, 16)}</p>
      </div>
      <div className=''>
        <p className='text-rose-500 font-semibold text-lg'>
          $ {product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
      <div className='flex '>
        <div className=' flex items-center'>
          {product_rating >= 1 &&
            [...Array(product_rating)].map((num, index) => {
              return (
                <React.Fragment key={index}>
                  <StarIcon className='h-5 w-5 text-yellow-500' />
                </React.Fragment>
              )
            })}
        </div>
        <div className='bg-blue-100 flex ml-2 py-1 px-2 rounded-lg'>
          <p className='text-sm text-blue-500 font-bold'>{product_rating}</p>
        </div>
      </div>
      <button
        className={
          isAddedToCart
            ? 'mt-auto bg-gray-100 ml-auto py-2 px-3 rounded-lg cursor-pointer shadow-sm text-blue-400 w-fit transition hover:-translate-y-0.5'
            : 'mt-auto bg-blue-500 ml-auto py-2 px-3 rounded-lg cursor-pointer shadow-sm  text-white w-fit transition hover:-translate-y-0.5'
        }
        onClick={addToCartHandler}
      >
        <div className='font-semibold text-sm flex justify-end items-center'>
          {' '}
          {isAddedToCart ? <p>Already In cart</p> : <p> Add To Cart</p>}
          <ShoppingCartIcon className='w-6 h-6 ml-2' />
        </div>
      </button>
    </div>
  )
}

export default ProductCard
