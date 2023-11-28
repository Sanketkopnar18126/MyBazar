import { createSlice } from "@reduxjs/toolkit";

const ProductLoadSlice = createSlice({
  name: "LoadProduct",

  initialState: {
    data: [],
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setProduct } = ProductLoadSlice.actions;

export default ProductLoadSlice.reducer;

export const FetchPro = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://fakestoreapiserver.reactbd.com/products"
      );

      const data = await res.json();
      dispatch(setProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};
