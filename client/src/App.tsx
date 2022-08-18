import React, { useEffect, useState } from 'react'
import { Cart, Home, LogIn, Products, Settings, SignUp } from './pages'
import ThemeProvider from './components/layouts/ThemeProvider'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGetProductListQuery } from './redux/rtkQuery/productListApiSlice'
import { getProductsFromCart, addProductToCart } from './redux/cartState'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const cart = useSelector((state: any) => state.cart)
  const location = useLocation()

  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem('cartItems')
  //   console.log('from losto', JSON.parse(storedCartItems))
  // }, [cart])

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <ThemeProvider>
        <div className=' w-full'>
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
    </>
  )
}

export default App
