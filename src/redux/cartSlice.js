import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        quantity:0,
        total:0,
        products:[]
    },
    reducers:{
        addProducts:(state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity
        },
        reduceQuantity:(state)=>{
            state.quantity -= 1
        },
        addQuantity:(state)=>{ 
            state.quantity += 1
        },
        resetQuantity:(state)=>{
           state.total= 0;
           state.quantity = 0;
           state.products =[]
        }
    }
})


export const {addProducts, reduceQuantity, addQuantity, resetQuantity} = cartSlice.actions
export default cartSlice.reducer