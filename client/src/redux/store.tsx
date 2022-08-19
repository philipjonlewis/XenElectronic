import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartState'
import { productListApiSlice } from './rtkQuery/productListApiSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    [productListApiSlice.reducerPath]: productListApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productListApiSlice.middleware),
})
