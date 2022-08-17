import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NavLink, useNavigate } from 'react-router-dom'
import { HomePageProductList } from '../components'

import { getProductsFromCart, addProductToCart } from '../redux/cartState'
import { useGetProductListQuery } from '../redux/rtkQuery/productListApiSlice'

const Home = () => {
  const { data, loading } = useGetProductListQuery(0) as any

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div className='w-full flex flex-col '>
      <div className='w-full h-32 overflow-hidden rounded-sm mt-2'>
        <img src='images/landing.jpg' alt='' className='object-cover object-center w-full h-full' />
      </div>
      <div className='flex   pb-8 '>
        <div className='p-4'>
          <p className='font-serif text-6xl font-bold text-neutral-600'>
            Your trusted partner in tech
          </p>
          <p className='text-lg text-neutral-500 mt-2'>
            XenElectronic is the most trusted e-commerce platform for your tech needs!
          </p>
          <div className='w-fit ml-auto sm:ml-0'>
            <NavLink to={'/products'}>
              <div
              // onClick={() => {
              //   fetch('http://192.168.0.25:4000/xenelectronic/api_v1/public/products')
              //     .then((res) => {
              //       console.log(res)
              //       return res.json()
              //     })
              //     .then((dat) => {
              //       console.log(dat)
              //     })
              // }}
              >
                <div className='mt-12 bg-indigo-500 hover:bg-rose-500 w-fit py-4 px-8 rounded-full'>
                  <p className='text-white font-serif font-bold '>Shop Now!</p>
                </div>
              </div>
            </NavLink>
            {/* <NavLink to={'/products'}>
              <div className='mt-12 bg-indigo-500 hover:bg-neutral-500 w-fit py-4 px-8 rounded-full'>
                <p className='text-white font-serif '>Shop Now!</p>
              </div>
            </NavLink> */}
          </div>
        </div>
      </div>

      {/* <HomePageProductList /> */}
      {/* <div className='container bottom-0 absolute w-full h-16'>
        <p>footer</p>
      </div> */}
    </div>
  )
}

export default Home
