import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "fetchData",
  async (pagination, { rejectWithValue }) => {
    try {
      const skip = (pagination.current - 1) * pagination.pageSize;
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${pagination.pageSize}&skip=${skip}`
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
export const fetchProductByKeyword = createAsyncThunk(
  "fetchProductByKeyword",
  async (keyword, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${keyword}&limit=4`
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
  searchedProducts: [],
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
      state.totalCount = action?.payload?.total;
      if (state.topProducts.length < 1) {
        state.topProducts = action.payload?.products.slice(0, 3);
      }
      state.productList = action.payload?.products;
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
    builder.addCase(fetchProductByKeyword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductByKeyword.fulfilled, (state, action) => {
      state.loading = false;
      state.searchedProducts = action?.payload?.products;
    });
    builder.addCase(fetchProductByKeyword.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {} = landingPageSlice.actions;
export default landingPageSlice.reducer;
