// ThemeProvider.js

import React, { useState } from 'react'

import Header from './layouts/Header'
import MobileNavbar from './navigation/MobileNavbar'

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(`light`)

  return (
    <div id='theme-wrapper' className={`${theme}`}>
      <div className='bg-gray-50 dark:bg-neutral-900 min-h-screen min-w-full '>
        <div className='container mx-auto'>
          <Header setTheme={setTheme} theme={theme} />
          {children}
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}
