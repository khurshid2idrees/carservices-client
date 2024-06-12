import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  orders: [],
  user: null,
  loading: false,
  error: false,
};

export const createOrder = createAsyncThunk(
  "createOrder",
  async (order, { rejectWithValue }) => {
    const response = await fetch("http://localhost:5000/orders", {
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

export const fetchOrders = createAsyncThunk(
  "fetchOrders",
  async (userId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:5000/orders/`+userId
    );

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
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    resetCart: (state, action) => {
      state.cartItems = [];
    },
    resetState: (state) => {
      return initialState;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
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
      })
      .addCase(fetchOrders.pending, (state,action) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  resetCart,
  resetState,
  saveUser,
  updateCartQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
