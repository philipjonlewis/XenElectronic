import React from 'react'
import {
  HomeIcon,
  ShoppingCartIcon,
  CogIcon,
  AdjustmentsIcon,
  ShoppingBagIcon,
  LoginIcon,
  LogoutIcon,
  PencilAltIcon,
} from '@heroicons/react/solid'
import { NavLink, useNavigate } from 'react-router-dom'

const LandingNavbar = () => {
  return (
    <div className='text-sm sticky hidden sm:flex top-28 p-2 mt-4 mb-2 sm:rounded-sm bg-slate-50  justify-between items-center text-neutral-500 '>
      <div className='flex gap-2'>
        <NavLink to={'/'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 hover:text-yellow-500'>
            <HomeIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Home</p>
          </div>
        </NavLink>
        <NavLink to={'/products'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 hover:text-yellow-500'>
            <ShoppingBagIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Products</p>
          </div>
        </NavLink>
      </div>
      {/*  */}

      {/*  */}
      <div className='flex gap-2'>
        <NavLink to={'/cart'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 hover:text-yellow-500'>
            <ShoppingCartIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Cart</p>
          </div>
        </NavLink>
        <NavLink to={'/signup'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 hover:text-yellow-500'>
            <PencilAltIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Sign Up</p>
          </div>
        </NavLink>
        <NavLink to={'/login'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 hover:text-yellow-500'>
            <LoginIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Log In</p>
          </div>
        </NavLink>
        {/* <NavLink to={'/logout'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 '>
            <LogoutIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Log Out</p>
          </div>
        </NavLink>
        <NavLink to={'/settings'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 '>
            <CogIcon className='h-5 w-5  ' />
            <p className='pt-1 text-xs'>Settings</p>
          </div>
        </NavLink> */}
      </div>
    </div>
  )
}

export default LandingNavbar
