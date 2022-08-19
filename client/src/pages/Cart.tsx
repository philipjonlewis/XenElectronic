import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProductFromCart } from '../redux/cartState'
import { useVerifyCartMutation } from '../redux/rtkQuery/productListApiSlice'
import { XCircleIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const [verifyData] = useVerifyCartMutation() as any
  const [storedCartItems, setStoredCartitems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems') as any
    const itemList = JSON.parse(storedItems)?.map((prod: any) => prod._id)

    if (itemList && itemList?.length >= 1) {
      verifyData(itemList).then((res) => {
        if (res?.data?.length >= 1) {
          setStoredCartitems(res.data)
        }
      })

      setTotalPrice((state: number) => {
        const total = JSON.parse(storedItems).reduce(function (acc, obj) {
          return acc + obj.product_price
        }, 0)
        return total.toFixed(2)
      })
    } else {
      toast.info('You can proceed without anything in the cart')
      setTotalPrice(0)
    }
  }, [cart])

  const removeFromCart = (_id: any) => {
    setStoredCartitems((state) => {
      return state.filter((prod: any) => prod._id !== _id)
    })
    dispatch(removeProductFromCart(_id))
    toast.info(`Removed the product from your cart 🥺`)
    // }
  }

  return (
    <div className='flex justify-center items-start pb-24 sm:pb-0'>
      <div className='bg-slate-50 shadow-sm w-100 p-2 rounded-lg pb-8'>
        <div className='px-2 mb-4 pb-4 border-b-[1px]'>
          <div className='pt-4'>
            <p className=' font-extrabold text-3xl text-indigo-500'>Your Shopping Cart</p>
          </div>
          <div className='pt-2'>
            <p className='text-xs'>
              <span className='text-gray-300'>Products &gt; </span>{' '}
              <span className='text-indigo-500 font-semibold'>Cart</span>
              <span className='text-gray-300'> &gt; Checkout &gt; </span>{' '}
            </p>
          </div>
        </div>
        <div className='h-100 mb-2 pb-5 overflow-scroll '>
          {/* start of cart */}

          {storedCartItems &&
            storedCartItems?.length >= 1 &&
            storedCartItems.map(({ _id, product_name, product_price, product_image }: any) => {
              return (
                <React.Fragment key={_id}>
                  <div className='relative flex w-full bg-white rounded-lg overflow-hidden p-2 hover:shadow-md transition mb-2'>
                    <div
                      className='absolute top-2 right-2 bg-rose-50 p-0.5 shadow-sm hover:shadow-lg rounded-full cursor-pointer'
                      onClick={() => removeFromCart(_id)}
                    >
                      <XCircleIcon className='w-6 h-6 text-red-500' />
                    </div>
                    <div>
                      <img
                        src={product_image}
                        alt=''
                        className='object-cover w-20 h-20 rounded-lg'
                      />
                    </div>
                    <div className='ml-2  '>
                      {/* <p className='text-neutral-400 text-xs'>Product</p> */}
                      <p className='text-lg text-neutral-600 font-bold'>{product_name}</p>
                      <p className='text-neutral-400 text-xs'>Price</p>
                      <p className='text-rose-500 text-sm font-semibold pl-2'>$ {product_price}</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}

          {/* end of cart */}
        </div>
        <div className='border-b-[1px] pb-2 mb-2'>
          <div className='mt-4 pt-2 border-t-[1px]'>
            <p className='font-bold text-neutral-700 text-2xl'>Total</p>
          </div>
          <div className='pl-2 mt-2'>
            <p className=' w-fit text-rose-500 font-bold text-xl'>
              $ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
        </div>
        <NavLink to={'/checkout'}>
          <div className='bg-indigo-500 p-4 rounded-lg hover:-translate-y-0.5 transition cursor-pointer hover:shadow-md hover:bg-indigo-600'>
            <p className='text-center text-white font-bold'>Proceed To Checkout</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Cart
