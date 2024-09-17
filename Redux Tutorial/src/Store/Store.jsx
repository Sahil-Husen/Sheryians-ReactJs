import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from '../Reducer/Reducer'
import UserReducer from '../Reducer/UserReducer'
import {ProductSlice} from '../Reducer/ProductReducer'


export default configureStore({
  reducer: {
        UserReducer:UserReducer,
        ProductSlice: ProductSlice,
  }
})