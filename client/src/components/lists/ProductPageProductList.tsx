import React, { useState, useEffect } from 'react'

import ProductCard from '../product/ProductCard'

const ProductPageProductList = ({ productListQueryResult }) => {
  const { data, isSuccess, isLoading } = productListQueryResult
  const [productList, setProductList] = useState([])

  useEffect(() => {
    if (isSuccess && data.payload.length >= 1) {
      console.log(data)
      setProductList(data.payload)
    }
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
          productList.map((prod: any, index) => {
            return (
              <React.Fragment key={prod._id}>
                <ProductCard product={prod} />
              </React.Fragment>
            )
          })}

        {/* <div className='bg-red-500'>Hello</div> */}
      </div>
    </div>
  )
}

export default ProductPageProductList
