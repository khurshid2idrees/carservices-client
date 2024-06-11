import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = {
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
        price: action.payload.price,
      };

      state.cartItems.push(product);
    },
    addOrders: (state, action) => {
      const order = {
        id: nanoid(),
        cart: action.payload.cart,
        user: action.payload.user,
        address: action.payload.fulladdress,
      };
      state.orders.push(order);
    },

    resetCart: (state, action) => {
      state.cartItems = [];
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { addToCart, addOrders, resetCart, resetState } = cartSlice.actions;

export default cartSlice.reducer;
