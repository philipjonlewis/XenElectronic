import React, { useState } from 'react'
import { MoonIcon, SunIcon, LightBulbIcon } from '@heroicons/react/solid'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ theme, setTheme }) => {
  return (
    <header className=' container h-24 flex justify-between items-center p-4 sticky top-2 sm:top-0 w-full  bg-slate-50 dark:bg-indigo-700  bg-opacity-80  backdrop-blur-sm sm:rounded-sm z-50'>
      <NavLink to={'/'}>
        <div className='logo-container'>
          <div className='text-xl font-bold text-indigo-500 dark:text-white flex'>
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
