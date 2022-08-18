import React, { useState, useEffect } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'

const LandingNavbar = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart)

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // const storedItems = localStorage.getItem('cartItems') as any
    // const itemList = JSON.parse(storedItems)
    setCartCount(cart.length)
    console.log(cart)
  }, [cart])

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
          <div className={cartCount >= 1 ? 'nav-link text-red-400' : 'nav-link'}>
            <p className='absolute -top-3 right-5 h-fit w-fit font-bold text-lg'>
              {cartCount >= 1 && cartCount}
            </p>
            <ShoppingCartIcon className='nav-icon' />
            <p>Cart</p>
          </div>
        </NavLink>
        {/* <NavLink to={'/signup'}>
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
        </NavLink> */}
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
