import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CustomError, ProductType } from '../../types';
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
    rejectValue: string[];
  }
>('products/getProducts', async (args, { getState, rejectWithValue }) => {
  const { productsReducers } = getState() as RootState;

  const products = productsReducers.products;

  const params: GetProductsParamsType = {
    count: args?.count || 12,
    start: products.length,
  };

  if (args?.search) params.search = args.search;
  if (args?.tags) params.tags = args.tags;

  try {
    const result = await axios.get('products', { params });
    return result?.data?.products;
  } catch (error) {
    const err = error as CustomError;
    console.log('getProducts err:: ', err);
    return rejectWithValue(err.response.data.message);
  }
});

type GetProductByIdArgsType = string | number;

export const getProductById = createAsyncThunk<
  ProductType,
  GetProductByIdArgsType,
  {
    rejectValue: string[];
  }
>('products/getProductById', async (id, { rejectWithValue }) => {
  try {
    const result = await axios.get(`products/${id}`);
    return result?.data?.product;
  } catch (error) {
    const err = error as CustomError;
    console.log('getProductById err:: ', err);
    return rejectWithValue(err.response.data.message);
  }
});

export const createProduct = createAsyncThunk<
  ProductType,
  ProductType,
  {
    rejectValue: string[];
  }
>('products/createProduct', async (args, { rejectWithValue }) => {
  try {
    const result = await axios.post(`products`, args);
    return result?.data?.product;
  } catch (error) {
    const err = error as CustomError;
    console.log('createProduct err:: ', err);
    return rejectWithValue(err.response.data.message);
  }
});

export const updateProduct = createAsyncThunk<
  ProductType,
  { data: ProductType; id: number | string },
  {
    rejectValue: string[];
  }
>('products/updateProduct', async (args, { rejectWithValue }) => {
  try {
    const result = await axios.put(`products/${args.id}`, args.data);
    return result?.data?.product;
  } catch (error) {
    const err = error as CustomError;
    console.log('createProduct err:: ', err);
    return rejectWithValue(err.response.data.message);
  }
});
