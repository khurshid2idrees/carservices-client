import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  orders: [],
  loading: false,
  error: false,
};

export const createOrder = createAsyncThunk(
  "createOrder",
  async (order, { rejectWithValue }) => {
    const response = await fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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

  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
        state.cartItems = [];
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart, addOrders, resetCart, resetState } =
  cartSlice.actions;

export default cartSlice.reducer;
