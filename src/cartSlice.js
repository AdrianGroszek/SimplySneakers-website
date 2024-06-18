import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
            toast.success('success')
        },

        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.shoesId !== action.payload
            )
        },

        increaseQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.shoesId === action.payload
            )

            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },

        decreaseQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.shoesId === action.payload
            )

            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice

            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action)
        },
    },
})

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
    cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalPrice = (state) =>
    state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0)
