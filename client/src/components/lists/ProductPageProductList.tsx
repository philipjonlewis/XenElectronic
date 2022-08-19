import React, { useState, useEffect } from 'react'

import ProductCard from '../product/ProductCard'
import { useGetProductListQuery } from '../../redux/rtkQuery/productListApiSlice'
import ProductFilterBar from '../product/ProductFilterBar'

const ProductPageProductList = () => {
  const [productQueryParams, setProductQueryParams] = useState({ count: 0, category: '' })
  const productListQueryResult = useGetProductListQuery(productQueryParams) as any
  const { data, isSuccess } = productListQueryResult

  return (
    <div>
      <ProductFilterBar
        setProductQueryParams={setProductQueryParams}
        productQueryParams={productQueryParams}
      />
      <div className='mx-2 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {isSuccess &&
          data?.payload?.length >= 1 &&
          data?.payload?.map((prod: any, index: number) => {
            return (
              <React.Fragment key={prod._id}>
                <ProductCard product={prod} />
              </React.Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default ProductPageProductList
