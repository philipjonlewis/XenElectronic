import React, { useState, useEffect } from 'react'

import ProductCard from '../product/ProductCard'

const HomePageProductList = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch('http://localhost:4000/xenelectronic/api_v1/public/products')

      const dat = await res.json()
      console.log(dat)
      setProductList(await dat.payload)
    }

    getProductData()
  }, [])

  return (
    <div className=''>
      <div className='border-b-[1px] mb-2'>
        <p className='p-2 my-2 text-2xl font-bold border-l-4 border-indigo-500'>All Products</p>
      </div>

      <div className='grid grid-cols-5 gap-4 '>
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
