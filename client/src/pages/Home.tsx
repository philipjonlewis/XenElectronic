import React from 'react'
import { HomeProductsList } from '../components'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full '>
      <div className='flex border-b-[1px] border-neutral-300 pb-4'>
        <div className='p-4'>
          <p className='font-serif text-6xl font-bold text-neutral-600'>
            Your trusted partner in tech
          </p>
          <p className='text-lg text-neutral-500 mt-2'>
            XenElectronic is the most trusted e-commerce platform for your tech needs!
          </p>
          <div className='w-fit ml-auto sm:ml-0'>
            <div
              onClick={() => {
                fetch('http://192.168.0.25:4000/xenelectronic/api_v1/public/products')
                  .then((res) => {
                    console.log(res)
                    return res.json()
                  })
                  .then((dat) => {
                    console.log(dat)
                  })
              }}
            >
              <div className='mt-12 bg-indigo-500 hover:bg-rose-500 w-fit py-4 px-8 rounded-full'>
                <p className='text-white font-serif font-bold '>Shop Now!</p>
              </div>
            </div>
            {/* <NavLink to={'/products'}>
              <div className='mt-12 bg-indigo-500 hover:bg-neutral-500 w-fit py-4 px-8 rounded-full'>
                <p className='text-white font-serif '>Shop Now!</p>
              </div>
            </NavLink> */}
          </div>
        </div>
      </div>

      <HomeProductsList />
    </div>
  )
}

export default Home
