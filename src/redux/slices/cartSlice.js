import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  
  name: 'cart',

  initialState: {
    totalPrice: 0,
    items: [],
  },

  reducers: {
    addGame: (state, action) => {
        const findItem = state.items.find((obj) => obj.id === action.payload.id);

        if (!findItem) {
            state.items.push({
                ...action.payload,
                count:1,
            });
        }
        state.totalPrice = state.items.reduce((sum, obj) =>{
            return obj.price + sum;
        },0);

        },

    removeGame: (state, action) => {
        state.items = state.items.filter(obj => obj.id !== action.payload);    
        state.totalPrice = state.items.reduce((sum, obj) => obj.price  + sum, 0);
    },

    clearCart: (state) => {
        state.items = [];
        state.totalPrice = 0;
    },
  },
})


export const { addGame, removeGame, clearCart } = cartSlice.actions;

export default cartSlice.reducer;