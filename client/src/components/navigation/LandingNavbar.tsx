import React, { useState, useEffect } from 'react'
import { HomeIcon, ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LandingNavbar = () => {
  const cart = useSelector((state: any) => state.cart)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    setCartCount(cart.length)
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
      </div>
    </nav>
  )
}

export default LandingNavbar
