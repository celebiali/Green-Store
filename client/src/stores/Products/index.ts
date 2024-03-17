import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  loading: false,
};

export const getProducts = createAsyncThunk("products", async () => {
  try {
    const response = await fetch("http://localhost:4000/products");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
});

export const getProductDetail = createAsyncThunk(async (id) => {
  try {
    const response = await fetch("http://localhost:4000/products/" + id);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProductDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
