import React, { useEffect, useState } from 'react'
import { Cart, Home, LogIn, Products, Settings, SignUp } from './pages'
import ThemeProvider from './components/ThemeProvider'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <div className=' min-h-screen w-full'>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
