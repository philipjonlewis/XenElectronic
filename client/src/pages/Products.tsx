import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ProductPageProductList } from '../components'
import { getProductsFromCart, addProductToCart } from '../redux/cartState'
import { useGetProductListQuery } from '../redux/rtkQuery/productListApiSlice'
import { addLocalStorageToCart } from '../redux/cartState'
const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fromStorage = localStorage.getItem('cartItems') as any
    const parsedFromStorage = JSON.parse(fromStorage)

    console.log('parsed', parsedFromStorage)
    if (parsedFromStorage && parsedFromStorage.length >= 1) {
      dispatch(addLocalStorageToCart(parsedFromStorage))
    }
  }, [])

  return (
    <div>
      <div className='mb-4 mt-12'>
        <p className='p-2 my-2 text-3xl text-indigo-500 font-bold border-l-4 border-indigo-500'>
          All Products
        </p>
      </div>
      <ProductPageProductList />
    </div>
  )
}

export default Products
