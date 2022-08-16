import React from 'react'
import ThemeProvider from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <div className='h-64'>
        <h1 className='text-xs font-bold text-blue-600'>
          Install & Setup Vite + React + Typescript + Tailwind SCSS 3
        </h1>
      </div>
    </ThemeProvider>
  )
}

export default App
