import React, { useCallback, useEffect } from 'react';

import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';

import ProductForm from '../../components/Forms/ProductForm';
import { useAppDispatch, useAppSelector } from '../../store';
import { getProductById, updateProduct } from '../../store/actions/productsActions';
import { RESET_ERROR } from '../../store/reducers/productsReducers';
import { ProductType } from '../../types';

const UpdateProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { currentProduct, isLoading, error } = useAppSelector((state) => state.productsReducers);

  const onSubmit = useCallback(
    async (data: ProductType) => {
      if (!currentProduct) return;

      const product = await dispatch(
        updateProduct({ data: data, id: currentProduct._id }),
      ).unwrap();

      navigate(`/products/${product?._id}`);
    },
    [currentProduct, dispatch, navigate],
  );

  useEffect(() => {
    if (!currentProduct && productId) {
      dispatch(getProductById(productId));
    }

    return () => {
      dispatch(RESET_ERROR());
    };
  }, [productId, currentProduct, dispatch]);

  useEffect(() => {
    if (error?.action === 'getProductById' && !currentProduct) {
      navigate('/not-found');
    }
  }, [currentProduct, error?.action, navigate]);

  if (!currentProduct && isLoading) {
    return (
      <Box textAlign='center'>
        <CircularProgress color='success' />
      </Box>
    );
  }

  return (
    <Box maxWidth='800px' mx='auto'>
      <ProductForm
        onSubmit={onSubmit}
        product={currentProduct}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
};

export default UpdateProduct;
