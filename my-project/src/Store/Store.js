import { configureStore } from "@reduxjs/toolkit";

import loadReducer from "../Slice/ProductLoadSlice";
import AddProductReducer from "../Slice/AddProduct";
import RemoveReducer from "../Slice/AddProduct";
export const Store = configureStore({
  reducer: {
    LoadProduct: loadReducer,
    productAdd: AddProductReducer,
    removeproduct: RemoveReducer,
  },
});
