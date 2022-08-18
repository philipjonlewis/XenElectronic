import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ProductPageProductList } from '../components'
import { getProductsFromCart, addProductToCart } from '../redux/cartState'
import { useGetProductListQuery } from '../redux/rtkQuery/productListApiSlice'

const Products = () => {
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
