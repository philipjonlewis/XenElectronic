// ThemeProvider.js

import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(`light`)

  return (
    <div id='theme-wrapper' className={`${theme}`}>
      <div className='bg-gray-50 dark:bg-neutral-900 h-screen w-full'>{children}</div>

      <div className='absolute right-8 top-8'>
        <button
          onClick={() => {
            theme == `light` ? setTheme(`dark`) : setTheme(`light`)
          }}
        >
          {theme == 'light' ? (
            <MoonIcon className='h-5 w-5 text-blue-500' />
          ) : (
            <SunIcon className='h-5 w-5 text-yellow-500' />
          )}
        </button>
      </div>
    </div>
  )
}
