import { createSlice } from "@reduxjs/toolkit";

const AddProduct = createSlice({
  name: "productAdd",
  initialState: [],
  reducers: {
    addproduct: (state, action) => {
      state.push(action.payload);
    },
    removeproduct: () => [],
  },
});

export const { addproduct, removeproduct } = AddProduct.actions;
export default AddProduct.reducer;

// const initialState = [];

// const AddProduct = createSlice({
//   name: "productAdd",
//   initialState,
//   reducers: {
//     addproduct: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// export const { addproduct } = AddProduct.actions;
// export default AddProduct.reducer;
