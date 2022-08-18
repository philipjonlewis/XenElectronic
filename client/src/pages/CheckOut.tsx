import React, { useState, useEffect } from 'react'

const CheckOut = () => {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems') as any
    const itemList = JSON.parse(storedItems)

    if (itemList?.length >= 1) {
      setTotalPrice((state: number) => {
        const total = itemList.reduce(function (acc, obj) {
          return acc + obj.product_price
        }, 0)
        console.log(total)
        return total.toFixed(2)
      })
    }
  }, [])

  return (
    <div className='container flex justify-center '>
      <div className='mx-2 sm:mx-0 bg-slate-50 w-96 p-4 rounded-lg flex flex-col justify-start items-center'>
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
        >
          <p>Pay </p>
          <p className='pl-2'>$ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
