import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authState'
import cartReducer from './cartState'
import { productListApiSlice } from './rtkQuery/productListApiSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [productListApiSlice.reducerPath]: productListApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productListApiSlice.middleware),
})
