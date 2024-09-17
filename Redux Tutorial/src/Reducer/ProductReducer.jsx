import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products:[],
};

export const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts : (state,action) =>{
            console.log('hi');
            axios.get('https://fakestoreapi.com/products')
            .then((response)=>console.log(response))
             .catch((error)=>console.log(error))
           
        }
    }
})


export default ProductSlice.reducer; // here we are made the reducer now import it in store or Global State
export const {getProducts} = ProductSlice.actions;