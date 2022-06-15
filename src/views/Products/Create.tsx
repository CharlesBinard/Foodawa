import React, { useCallback, useEffect } from 'react';

import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import ProductForm from '../../components/Forms/ProductForm';
import { useAppDispatch, useAppSelector } from '../../store';
import { createProduct } from '../../store/actions/productsActions';
import { RESET_ERRORS } from '../../store/reducers/productsReducers';
import { ProductType } from '../../types';

const CreateProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { errors, isLoading } = useAppSelector((state) => state.productsReducers);

  const onSubmit = useCallback(
    async (data: ProductType) => {
      const product = await dispatch(createProduct(data)).unwrap();
      navigate(`/products/${product?._id}`);
    },
    [dispatch, navigate],
  );

  useEffect(() => {
    return () => {
      dispatch(RESET_ERRORS());
    };
  }, [dispatch]);

  return (
    <Box maxWidth='800px' mx='auto'>
      <ProductForm onSubmit={onSubmit} type='CREATE' errors={errors} isLoading={isLoading} />
    </Box>
  );
};

export default CreateProduct;
