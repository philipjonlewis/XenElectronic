import React, { useState } from 'react'
import { MoonIcon, SunIcon, LightBulbIcon } from '@heroicons/react/solid'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ theme, setTheme }) => {
  return (
    <header className=' container h-24 flex justify-between items-center p-4 sticky sm:top-2 w-full  bg-slate-50 dark:bg-indigo-700  bg-opacity-60 sm:bg-opacity-100  backdrop-blur-sm sm:rounded-sm '>
      <NavLink to={'/'}>
        <div className='logo-container'>
          <div className='text-xl font-bold text-indigo-600 dark:text-white flex'>
            {' '}
            <LightBulbIcon className='h-6 w-6 mr-2' />
            <p>XenElectronic</p>
          </div>
        </div>
      </NavLink>
      <div className=''>
        <button
          onClick={() => {
            theme == `light` ? setTheme(`dark`) : setTheme(`light`)
          }}
        >
          {theme == 'light' ? (
            <MoonIcon className='h-6 w-6 text-blue-500' />
          ) : (
            <SunIcon className='h-6 w-6 text-yellow-500' />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
