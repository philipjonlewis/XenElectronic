import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ProductPageProductList } from '../components'
import { getProductsFromCart } from '../redux/cartState'
import { useGetProductListQuery } from '../redux/rtkQuery/productListApiSlice'

const Products = () => {
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()
  // console.log(hello)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const productListQueryResult = useGetProductListQuery(0) as any

  return (
    <div>
      <ProductPageProductList productListQueryResult={productListQueryResult} />
    </div>
  )
}

export default Products
