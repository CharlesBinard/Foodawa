import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import BigProductCard from '../../components/Cards/BigProductCard';
import SmallProductCard from '../../components/Cards/SmallProductCard';
import { useAppDispatch, useAppSelector } from '../../store';
import { getProductById, getProducts } from '../../store/actions/productsActions';
import { RESET_PRODUCTS } from '../../store/reducers/productsReducers';

const Product = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { currentProduct, products } = useAppSelector((state) => state.productsReducers);

  useEffect(() => {
    dispatch(RESET_PRODUCTS());
    if (!currentProduct && productId) {
      dispatch(getProductById(productId));
    }
  }, [productId, currentProduct, dispatch]);

  useEffect(() => {
    if (!currentProduct) return;
    dispatch(
      getProducts({
        count: 4,
        tags: currentProduct.tags,
      }),
    );
  }, [currentProduct, dispatch]);

  return (
    <>
      <BigProductCard product={currentProduct} />
      <Box mt='40px'>
        <Typography fontSize='32px' fontWeight={700}>
          Articles similaires
        </Typography>
        <Grid container alignItems='center' columnSpacing='40px' mt='27px'>
          {products.length > 0 ? (
            products
              .filter((product) => product._id !== currentProduct?._id)
              .map((product, key) => (
                <Grid item xs={12} md={4} lg={3} key={key}>
                  <SmallProductCard product={product} />
                </Grid>
              ))
          ) : (
            <Grid item xs={12} md={4} lg={3}>
              <SmallProductCard />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
