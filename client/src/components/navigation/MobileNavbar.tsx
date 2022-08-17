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
    <div className='sm:hidden backdrop-blur-sm bg-gray-50 bg-opacity-80 fixed left-0 bottom-0 w-full h-24 p-4'>
      <div className='h-full text-sm text-indigo-500'>
        <ul className='flex justify-between items-center h-full'>
          <NavLink to={'/'}>
            <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
              <HomeIcon className='h-6 w-6  ' />
              <p className='pt-1'>Home</p>
            </li>
          </NavLink>
          <NavLink to={'/products'}>
            <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
              <ShoppingBagIcon className='h-6 w-6  ' />
              <p className='pt-1'>Products</p>
            </li>
          </NavLink>
          <NavLink to={'/settings'}>
            <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
              <CogIcon className='h-6 w-6  ' />
              <p className='pt-1'>Settings</p>
            </li>
          </NavLink>
          <NavLink to={'/cart'}>
            <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
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
