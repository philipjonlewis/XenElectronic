import React from 'react'
import { HomeIcon, ShoppingCartIcon, CogIcon, AdjustmentsIcon } from '@heroicons/react/solid'

const MobileNavbar = () => {
  return (
    <div className='sm:hidden backdrop-blur-sm bg-gray-50 bg-opacity-80 fixed left-0 bottom-0 w-full h-24 p-4'>
      <div className='h-full text-sm text-indigo-500'>
        <ul className='flex justify-between items-center h-full'>
          <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
            <HomeIcon className='h-6 w-6  ' />
            <p>Home</p>
          </li>
          <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
            <AdjustmentsIcon className='h-6 w-6  ' />
            <p>Filter</p>
          </li>
          <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
            <CogIcon className='h-6 w-6  ' />
            <p>Settings</p>
          </li>
          <li className='bg-opacity-80 bg-white w-20 py-4 rounded-lg flex flex-col justify-center items-center'>
            <ShoppingCartIcon className='h-6 w-6  ' />
            <p>Cart</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar
