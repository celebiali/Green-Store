import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define an interface for your product data
interface Product {
  id: number;
  // Add other product properties here (name, description, price, etc.)
}

const initialState = {
  products: [] as Product[], // Initialize with an empty array of products
  product: {} as Product, // Initialize product as an empty object
  loading: false,
};

export const getProducts = createAsyncThunk<Product[]>("products", async () => {
  try {
    const response = await fetch("http://localhost:4000/products");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return Promise.reject(error); // Explicitly reject on error for type safety
  }
});

export const getProductDetail = createAsyncThunk<Product, number>(
  "productDetail",
  async (id: number) => {
    try {
      const response = await fetch("http://localhost:4000/products/" + id);
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      return Promise.reject(error); // Explicitly reject on error for type safety
    }
  }
);

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
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
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
