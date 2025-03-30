import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menuSlice";

// Config store
export const store = configureStore({
  reducer: {
    menuId: menuReducer,
  },
});
