import React, { useEffect, useState } from 'react'
import { Cart, Home, Products, CheckOut } from './pages'
import ThemeProvider from './components/layouts/ThemeProvider'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'

function App() {
  const location = useLocation()
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider>
        <div className=' w-full'>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<Products />} />
            <Route path='checkout' element={<CheckOut />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
