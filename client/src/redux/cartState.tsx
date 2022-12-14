import { createSlice, current } from '@reduxjs/toolkit'

export const activeProjectSlice = createSlice({
  name: 'cartContent',
  initialState: [],
  reducers: {
    addProductToCart: (state, actions) => {
      // console.log(actions.payload)
      if (state.some((obj) => obj._id == actions.payload._id)) return

      const fromStorage = localStorage.getItem('cartItems') as any
      const parsedFromStorage = JSON.parse(fromStorage)

      // console.log('parsed', parsedFromStorage)

      if (parsedFromStorage && parsedFromStorage.length >= 1) {
        if (parsedFromStorage.some((obj) => obj._id == actions.payload._id)) return

        parsedFromStorage.push(actions.payload)
        localStorage.setItem('cartItems', JSON.stringify(parsedFromStorage))
      } else {
        localStorage.setItem('cartItems', JSON.stringify([...state, actions.payload]))
      }

      return [...state, actions.payload]
    },
    addLocalStorageToCart: (state, actions) => {
      return actions.payload
    },
    getProductsFromCart: (state, actions) => {
      return state
    },
    removeProductFromCart: (state, actions) => {
      const newState = state.filter((prod: any) => prod._id !== actions.payload)

      const fromStorage = localStorage.getItem('cartItems') as any
      const parsedFromStorage = JSON.parse(fromStorage)

      if (parsedFromStorage && parsedFromStorage.length >= 1) {
        const newLocalStorageCart = parsedFromStorage.filter(
          (prod: any) => prod._id !== actions.payload,
        )
        localStorage.setItem('cartItems', JSON.stringify(newLocalStorageCart))
      }

      return [...newState]
    },
  },
})

const { actions, reducer } = activeProjectSlice

export const { addProductToCart, getProductsFromCart, addLocalStorageToCart,removeProductFromCart } = actions

export default reducer
