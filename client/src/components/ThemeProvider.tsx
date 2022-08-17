// ThemeProvider.js

import React, { useState } from 'react'

import Header from './layouts/Header'
import MobileNavbar from './navigation/MobileNavbar'
import LandingNavbar from './navigation/LandingNavbar'
export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(`light`)

  return (
    <div id='theme-wrapper' className={`${theme}`}>
      <div className='bg-slate-100 dark:bg-slate-900 min-h-full min-w-full '>
        <div className='container mx-auto'>
          <Header setTheme={setTheme} theme={theme} />
          <LandingNavbar />
          {children}
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}
