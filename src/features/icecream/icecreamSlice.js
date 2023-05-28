import { createSlice } from "@reduxjs/toolkit";
import { order as cakeOrdered } from '../cake/cakeSlice'
// const {cakeActions} = require('../cake/cakeSlice')

const initialState = {
  numOfIceCream: 30
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIceCream--
    },
    restock: (state, action) => {
      state.numOfIceCream += action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numOfIceCream--
  //   })
  // }
})

export default icecreamSlice.reducer
export const { order, restock } = icecreamSlice.actions