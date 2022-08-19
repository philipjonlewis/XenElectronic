import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllProductsFromCart } from '../redux/cartState'
const CheckOut = () => {
  const dispatch = useDispatch()

  const [totalPrice, setTotalPrice] = useState(0)
  const [isPaying, setIsPaying] = useState(false)
  const [isDonePaying, setIsDonePaying] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    toast.info('You can proceed without any information')

    const storedItems = localStorage.getItem('cartItems') as any
    const itemList = JSON.parse(storedItems)

    if (itemList?.length >= 1) {
      setTotalPrice((state: number) => {
        const total = itemList.reduce(function (acc, obj) {
          return acc + obj.product_price
        }, 0)
        return total.toFixed(2)
      })
    }
  }, [])

  const paymentApprovalHandler = () => {
    localStorage.removeItem('cartItems')
    dispatch(removeAllProductsFromCart())
    setIsPaying(true)
    setTimeout(() => {
      setIsPaying(false)
      setIsDonePaying(true)
      toast.success(`Redirecting to the products page...`)

      setTimeout(() => {
        setIsDonePaying(false)
        navigate('/products', { replace: true })
      }, 3000)
    }, 3000)
  }

  return (
    <div className='container flex justify-center relative'>
      {isPaying && (
        <div className='absolute w-full h-full bg-indigo-500 bg-opacity-40 flex justify-center items-center'>
          <div className='bg-indigo-700 flex flex-col justify-center items-center rounded-xl px-4 py-6'>
            <img src='/rings.svg' alt='' className='w-16 h-16' />
            <p className='text-xs text-white font-bold mt-4'>Processing Payment</p>
          </div>
        </div>
      )}
      {isDonePaying && (
        <div className='absolute w-full h-full bg-red-500 bg-opacity-40 flex justify-center items-center'>
          <div className='bg-red-700 flex flex-col justify-center items-center rounded-xl px-4 py-6'>
            <p className='text-2xl'>🎉 🥳 </p>

            <p className='text-xs text-white font-bold mt-4'>Thank you for shopping with us!</p>
          </div>
        </div>
      )}

      <div className='mx-2 sm:mx-0 bg-slate-50 w-100 p-4 rounded-lg flex flex-col justify-start items-center'>
        <div className='pt-4 w-full mb-4'>
          <p className=' font-extrabold text-3xl text-indigo-500 text-left pb-2'>Checkout</p>
          <p className='text-xs'>
            <span className='text-gray-300'>Products &gt; Cart &gt; </span>{' '}
            <span className='text-indigo-500 font-semibold'>Checkout</span>
          </p>
        </div>

        <form className='w-full'>
          <div className='form-div'>
            <label htmlFor='email'>Email address</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='form-div'>
            <label htmlFor='email'>Name on Card</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='form-div'>
            <label htmlFor='email'>Card Number</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='flex gap-1'>
            <div className='form-div'>
              <label htmlFor='email'>Expiration Date</label>
              <input type='date' name='email' id='email' />
            </div>
            <div className='form-div'>
              <label htmlFor='email'>CVC</label>
              <input type='number' name='email' id='email' />
            </div>
          </div>
          <div className='form-div'>
            <label htmlFor='email'>Address</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='flex gap-1'>
            <div className='form-div'>
              <label htmlFor='email'>City</label>
              <input type='text' name='email' id='email' />
            </div>
            <div className='form-div'>
              <label htmlFor='email'>State / Province</label>
              <input type='number' name='email' id='email' />
            </div>
          </div>
          <div className='flex mb-4'>
            <input type='checkbox' name='' id='' />
            <p className='text-sm pl-1'>Billing address is the same as shipping address</p>
          </div>
        </form>
        <div
          className='bg-indigo-600 rounded-lg text-white text-center  w-full mb-2 flex justify-center
        p-4  hover:-translate-y-0.5 transition cursor-pointer hover:shadow-md hover:bg-indigo-700'
          onClick={paymentApprovalHandler}
        >
          <p>Pay </p>
          <p className='pl-2'>$ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
