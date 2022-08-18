export const cartLocalStorageHandler = () =>{
    const fromStorage = localStorage.getItem('cartItems') as any
    const parsedFromStorage = JSON.parse(fromStorage)

    console.log('parsed', parsedFromStorage)

    if (parsedFromStorage) {
      if (parsedFromStorage.some((obj) => obj._id == actions.payload._id)) return

      parsedFromStorage.push(actions.payload)
      localStorage.setItem('cartItems', JSON.stringify(parsedFromStorage))
    } else {
      localStorage.setItem('cartItems', JSON.stringify([...state, actions.payload]))
    }
}