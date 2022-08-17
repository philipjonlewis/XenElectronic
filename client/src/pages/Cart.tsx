import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsFromCart, addProductToCart } from '../redux/cartState'
const Cart = () => {
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const [storedCartItems, setStoredCartitems] = useState([])
  let items
  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems') as any
    const itemList = JSON.parse(storedItems)

    if (itemList?.length >= 1) {
      setStoredCartitems(itemList)
    }
    // check if cart items are valid
    // console.log('From Cart')
    // setStoredCartitems()
    // console.log('hi', itemList)
  }, [cart])

  return (
    <div>
      {storedCartItems &&
        storedCartItems?.length >= 1 &&
        storedCartItems.map((listItem) => {
          console.log(listItem)
          return <div>{listItem.product_title}</div>
        })}
    </div>
  )
}

export default Cart
