import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { PRODUCT_BY_REQUEST } from '../../contants';
import { ApiResponseError, ProductType, CustomError } from '../../types';
import { RootState } from '../index';

type GetProductsParamsType = {
  count?: number;
  start?: number;
  search?: string;
  tags?: string[];
};

export const getProducts = createAsyncThunk<
  ProductType[],
  GetProductsParamsType | undefined,
  {
    rejectValue: CustomError;
  }
>('products/getProducts', async (args, { getState, rejectWithValue }) => {
  const { productsReducers } = getState() as RootState;

  const products = productsReducers.products;

  const params: GetProductsParamsType = {
    count: args?.count || PRODUCT_BY_REQUEST,
    start: products.length,
  };

  if (args?.search) params.search = args.search;
  if (args?.tags) params.tags = args.tags;

  try {
    const result = await axios.get('products', { params });
    return result?.data?.products;
  } catch (error) {
    const err = error as ApiResponseError;
    console.log('getProducts err:: ', err);
    return rejectWithValue({
      status: err.response.status,
      messages: err.response.data?.message,
      action: 'getProducts',
    });
  }
});

type GetProductByIdArgsType = string | number;

export const getProductById = createAsyncThunk<
  ProductType,
  GetProductByIdArgsType,
  {
    rejectValue: CustomError;
  }
>('products/getProductById', async (id, { rejectWithValue }) => {
  try {
    const result = await axios.get(`products/${id}`);
    return result?.data?.product;
  } catch (error) {
    const err = error as ApiResponseError;
    console.log('getProductById err:: ', err);
    return rejectWithValue({
      status: err.response.status,
      messages: err.response.data?.message,
      action: 'getProductById',
    });
  }
});

export const createProduct = createAsyncThunk<
  ProductType,
  ProductType,
  {
    rejectValue: CustomError;
  }
>('products/createProduct', async (args, { rejectWithValue }) => {
  try {
    const result = await axios.post(`products`, args);
    return result?.data?.product;
  } catch (error) {
    const err = error as ApiResponseError;
    console.log('createProduct err:: ', err);
    return rejectWithValue({
      status: err.response.status,
      messages: err.response.data?.message,
      action: 'createProduct',
    });
  }
});

export const updateProduct = createAsyncThunk<
  ProductType,
  { data: ProductType; id: number | string },
  {
    rejectValue: CustomError;
  }
>('products/updateProduct', async (args, { rejectWithValue }) => {
  try {
    const result = await axios.put(`products/${args.id}`, args.data);
    return result?.data?.product;
  } catch (error) {
    const err = error as ApiResponseError;
    console.log('createProduct err:: ', err);
    return rejectWithValue({
      status: err.response.status,
      messages: err.response.data?.message,
      action: 'updateProduct',
    });
  }
});
