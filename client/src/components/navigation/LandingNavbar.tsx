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
    <nav className='landing-navbar-container'>
      <div className='sub-container'>
        <NavLink to={'/'}>
          <div className='nav-link'>
            <HomeIcon className='nav-icon' />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to={'/products'}>
          <div className='nav-link'>
            <ShoppingBagIcon className='nav-icon' />
            <p>Products</p>
          </div>
        </NavLink>
      </div>
      {/*  */}

      {/*  */}
      <div className='sub-container'>
        <NavLink to={'/cart'}>
          <div className='nav-link'>
            <ShoppingCartIcon className='nav-icon' />
            <p>Cart</p>
          </div>
        </NavLink>
        <NavLink to={'/signup'}>
          <div className='nav-link'>
            <PencilAltIcon className='nav-icon' />
            <p>Sign Up</p>
          </div>
        </NavLink>
        <NavLink to={'/login'}>
          <div className='nav-link'>
            <LoginIcon className='nav-icon' />
            <p>Log In</p>
          </div>
        </NavLink>
        {/* <NavLink to={'/logout'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 '>
            <LogoutIcon className='nav-icon' />
            <p className='pt-1 text-xs'>Log Out</p>
          </div>
        </NavLink>
        <NavLink to={'/settings'}>
          <div className='flex flex-col justify-center items-center w-20 py-1 '>
            <CogIcon className='nav-icon' />
            <p className='pt-1 text-xs'>Settings</p>
          </div>
        </NavLink> */}
      </div>
    </nav>
  )
}

export default LandingNavbar
