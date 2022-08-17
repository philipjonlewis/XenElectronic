import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
const Header = ({ theme, setTheme }) => {
  return (
    <header className='h-24 flex justify-between items-center p-4 border-b-[1px] fixed w-full bg-gray-50 dark:bg-neutral-800  bg-opacity-60  backdrop-blur-sm'>
      <div className='logo-container'>
        <p className='text-xl font-bold text-indigo-600 dark:text-white'>XenElectronic</p>
      </div>
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
