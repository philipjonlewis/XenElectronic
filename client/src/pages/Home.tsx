import React from 'react'
import { LandingNavbar } from '../components'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full '>
      <div className='flex border-b-[1px] border-neutral-300 pb-4'>
        <div className='p-4'>
          <p className='font-serif text-6xl font-bold text-neutral-500'>
            Your trusted partner in tech
          </p>
          <p className='text-lg text-neutral-500 mt-2'>
            XenElectronic is the most trusted e-commerce platform for your tech needs!
          </p>
          <div className='w-fit ml-auto sm:ml-0'>
            <NavLink to={'/products'}>
              <div className='mt-12 bg-indigo-500 hover:bg-neutral-500 w-fit py-4 px-8 rounded-full'>
                <p className='text-white font-serif '>Shop Now!</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home