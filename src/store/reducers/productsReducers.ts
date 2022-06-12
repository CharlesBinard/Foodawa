import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from '../../types';
import {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
} from './../actions/productsActions';

export interface VehicleReducerState {
  products: ProductType[];
  currentProduct: ProductType | undefined;
  isLoading: boolean;
  noMoreResult: boolean;
  errors: string[] | undefined;
}

const initialState: VehicleReducerState = {
  products: [],
  currentProduct: undefined,
  isLoading: false,
  noMoreResult: false,
  errors: undefined,
};

// Reducer
const productsSlice = createSlice({
  name: 'productsReducers',
  initialState,
  reducers: {
    RESET_PRODUCTS(state) {
      state.products = initialState.products;
      state.isLoading = initialState.isLoading;
      state.errors = initialState.errors;
      state.noMoreResult = initialState.noMoreResult;
    },
    RESET_CURRENT_PRODUCT(state) {
      state.currentProduct = initialState.currentProduct;
      state.isLoading = initialState.isLoading;
      state.errors = initialState.errors;
    },
    SET_CURRENT_PRODUCT(state, action) {
      state.currentProduct = action.payload;
    },
    RESET_ERRORS(state) {
      state.errors = initialState.errors;
    },
  },
  extraReducers: (builder) => {
    // GET PRODUCTS
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.noMoreResult = action.payload.length > 12 ? false : true;
      state.isLoading = false;
      state.products = [...state.products, ...action.payload];
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
    // GET PRODUCT
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
    // CREATE PRODUCT
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
    // UPDATE PRODUCT
    builder.addCase(updateProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { RESET_PRODUCTS, SET_CURRENT_PRODUCT, RESET_CURRENT_PRODUCT, RESET_ERRORS } =
  productsSlice.actions;

// Reducer
export default productsSlice.reducer;
