import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "fetchData",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      if (response.status === 200) {
        return response?.data;
      } else {
        console.error("Error: Non-200 status code received:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      if (response.status === 200) {
        return response?.data;
      } else {
        console.error("Error: Non-200 status code received:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
);

const initialState = {
  loading: false,
  totalCount: 0,
  topProducts: [],
  productList: [],
  selectedProduct: {},
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      if (state.topProducts.length < 1) {
        state.topProducts = action.payload?.products.slice(0, 3);
        state.productList = action.payload?.products.slice(3);
      } else {
        state.productList = action.payload?.products;
      }
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedProduct = action?.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {} = landingPageSlice.actions;
export default landingPageSlice.reducer;
