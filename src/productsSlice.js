import { createSlice } from '@reduxjs/toolkit'
import { data } from './data'

const initialState = {
    products: [...data],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
})

export default productsSlice.reducer

export const getProducts = (state) => state.products.products

export const getSingleItemById = (id) => (state) =>
    state.products.products.find((product) => product.id === id) || 0
