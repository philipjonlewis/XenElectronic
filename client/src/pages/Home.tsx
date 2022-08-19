import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { useGetProductListQuery } from '../redux/rtkQuery/productListApiSlice'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='hero-image-container'>
        <img src='images/landing.jpg' />
      </div>
      <div className='hero-container mx-2 sm:mx-0'>
        <p className=''>Your trusted partner in tech</p>
        <p className=''>
          XenElectronic is the most trusted e-commerce platform for your tech needs!
        </p>
        <div className='w-fit ml-auto sm:ml-0'>
          <NavLink to={'/products'}>
            <div className='cta-container'>
              <p className=''>Shop Now!</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
