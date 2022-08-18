import React, { useState, useEffect } from 'react'

import ProductCard from '../product/ProductCard'

const HomePageProductList = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch(`${${import.meta.env.VITE_BACKEND_PORT}}/xenelectronic/api_v1/public/products?count=5`)

      const dat = await res.json()
      console.log(dat)
      setProductList(await dat.payload)
    }

    getProductData()
  }, [])

  return (
    <div className=''>
      <div className='mb-2'>
        <p className='p-2 my-2 text-3xl text-indigo-500 font-bold border-l-4 border-indigo-500'>
          All Products
        </p>
      </div>

      <div className='mx-2 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 '>
        {productList.length >= 1 &&
          productList.map((prod, index) => {
            return <ProductCard key={index} product={prod} />
          })}

        {/* <div className='bg-red-500'>Hello</div> */}
      </div>
    </div>
  )
}

export default HomePageProductList
