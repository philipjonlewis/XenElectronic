import { createSlice, current } from '@reduxjs/toolkit'

export const activeProjectSlice = createSlice({
  name: 'cartContent',
  initialState: [],
  reducers: {
    addProductToCart: (state, actions) => {
      console.log(actions.payload)
      if (state.some((obj) => obj._id == actions.payload._id)) return

      return [...state, actions.payload]
    },
    getProductsFromCart: (state, actions) => {
      return state
    },
  },
})

const { actions, reducer } = activeProjectSlice

export const { addProductToCart, getProductsFromCart } = actions

export default reducer
