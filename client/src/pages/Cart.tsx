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
          return (
            <React.Fragment key={listItem._id}>
              <div>{listItem.product_name}</div>
            </React.Fragment>
          )
        })}
    </div>
  )
}

export default Cart
