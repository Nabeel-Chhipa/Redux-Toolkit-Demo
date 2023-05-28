import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfCake--;
    },
    restock: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions;