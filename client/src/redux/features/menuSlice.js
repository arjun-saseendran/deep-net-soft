import { createSlice } from "@reduxjs/toolkit";

// Set inital value
const initialState = {
  id: null,
};

// Create menu slice
const menuSlice = createSlice({
  name: "menuId",
  initialState,
  reducers: {
    setMenuId: (state, action) => {
      state.menuId = action.payload;
    },
  },
});

export const { setMenuId } = menuSlice.actions;

export default menuSlice.reducer