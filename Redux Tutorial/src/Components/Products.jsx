import React, { useEffect } from 'react'
// after making the reducer in the ProductsReducer now importing to fetch the from the api
import { getProducts } from '../Reducer/ProductReducer'
import { useDispatch } from 'react-redux'

function Products() {

  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getProducts())
  },[dispatch])

  return (
    <div className='m-auto container bg-red-100 p-10 mt-2'>
    <h1 className='text-2xl font-bold text-red-900 mb-10'>Product List</h1>
     <ul>
      <li>hello</li>
     </ul>
   </div>
  )
}

export default Products