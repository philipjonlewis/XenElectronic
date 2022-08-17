import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsFromCart, addProductToCart } from '../redux/cartState'
const Cart = () => {
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  return <div>Cart</div>
}

export default Cart
