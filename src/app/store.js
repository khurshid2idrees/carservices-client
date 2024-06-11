import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const rootReducer = combineReducers({
    cart: cartSlice,
    // Add other reducers here if you have more slices
  });

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState()); // Save the entire Redux state to localStorage
});
