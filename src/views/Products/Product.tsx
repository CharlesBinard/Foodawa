import { useEffect, useMemo } from 'react';

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
  const { currentProduct, products, isLoading } = useAppSelector((state) => state.productsReducers);

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

  const similarProducts = useMemo(
    () => products.filter((product) => product._id !== currentProduct?._id),
    [currentProduct?._id, products],
  );

  return (
    <>
      <BigProductCard product={currentProduct} />
      <Box mt='40px'>
        <Typography fontSize='32px' fontWeight={700}>
          Articles similaires
        </Typography>
        <Grid container alignItems='center' columnSpacing='40px' rowSpacing='27px'>
          {similarProducts.length > 0 &&
            similarProducts.map((product, key) => (
              <Grid item xs={12} md={4} lg={3} key={key}>
                <SmallProductCard product={product} />
              </Grid>
            ))}

          {similarProducts.length === 0 && isLoading && (
            <Grid item xs={12} md={4} lg={3}>
              <SmallProductCard />
            </Grid>
          )}

          {similarProducts.length === 0 && !isLoading && (
            <Grid item xs={12}>
              <Typography textAlign='center' fontSize='24px' fontWeight={500}>
                Pas darticles similaires
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
