import React, { useState, useEffect } from 'react'

import ProductCard from '../product/ProductCard'
import { useGetProductListQuery } from '../../redux/rtkQuery/productListApiSlice'
import { resolveProjectReferencePath } from 'typescript'

const ProductPageProductList = () => {
  const [productCount, setProductCount] = useState({ count: 0, category: '' })
  const [category, setCategory] = useState('')
  const productListQueryResult = useGetProductListQuery(productCount) as any
  const { data, isSuccess, isLoading, refetch } = productListQueryResult
  const [productList, setProductList] = useState([])
  // console.log(data)
  // useEffect(() => {
  //   console.log('tes5')
  //   if (isSuccess && data.payload.length >= 1) {
  //     console.log(data)
  //     return setProductList(data.payload)
  //   }

  //   setProductList([])
  // }, [productCount])

  useEffect(() => {
    console.log(category)
  }, [category])

  if (isLoading) {
    refetch()
    return <div>Loading...</div>
  }

  if (isSuccess) {
    return (
      <div>
        <div
          onClick={() => {
            setProductCount({ count: 0, category: '' })
          }}
        >
          <p>click me 0</p>
        </div>
        <div
          onClick={() => {
            setProductCount({ count: 2, category: '' })
          }}
        >
          <p>click me </p>
        </div>
        <div
          onClick={() => {
            setProductCount({ count: 0, category: 'apple' })
          }}
        >
          <p>click me apple</p>
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value='Orange'>Orange</option>
            <option value='Radish'>Radish</option>
            <option value='Cherry'>Cherry</option>
          </select>
        </div>
        <div className='mx-2 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {data &&
            data?.payload?.length >= 1 &&
            data?.payload?.map((prod: any, index) => {
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
}

export default ProductPageProductList
