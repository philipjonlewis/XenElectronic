import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authState'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
