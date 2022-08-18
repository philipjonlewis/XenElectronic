import React from 'react'
import {
  HomeIcon,
  ShoppingCartIcon,
  CogIcon,
  AdjustmentsIcon,
  ShoppingBagIcon,
} from '@heroicons/react/solid'
import { NavLink, useNavigate } from 'react-router-dom'

const MobileNavbar = () => {
  const navigate = useNavigate()

  return (
    <div className='sm:hidden backdrop-blur-sm  fixed left-0 bottom-0 h-24 container flex justify-center z-50'>
      <div className='text-sm text-indigo-500 dark:text-indigo-500 bg-gray-50 bg-opacity-80 m-2 w-full flex justify-center items-center rounded-lg'>
        <ul className=' grid grid-cols-3 gap-1 justify-center items-center w-full h-full p-1'>
          {/* <ul className='flex justify-center items-center w-full gap-2'> */}
          <NavLink to={'/'}>
            <li className='bg-opacity-80 bg-white rounded-lg flex flex-col justify-center items-center py-3'>
              <HomeIcon className='h-6 w-6  ' />
              <p className='pt-1'>Home</p>
            </li>
          </NavLink>
          <NavLink to={'/products'}>
            <li className='bg-opacity-80 bg-white rounded-lg flex flex-col justify-center items-center py-3'>
              <ShoppingBagIcon className='h-6 w-6  ' />
              <p className='pt-1'>Products</p>
            </li>
          </NavLink>
          {/* <NavLink to={'/settings'}>
            <li className='bg-opacity-80 bg-white rounded-lg flex flex-col justify-center items-center py-3'>
              <CogIcon className='h-6 w-6  ' />
              <p className='pt-1'>Settings</p>
            </li>
          </NavLink> */}
          <NavLink to={'/cart'}>
            <li className='bg-opacity-80 bg-white rounded-lg flex flex-col justify-center items-center py-3'>
              <ShoppingCartIcon className='h-6 w-6  ' />
              <p className='pt-1'>Cart</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar
