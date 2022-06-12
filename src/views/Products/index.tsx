import React, { useCallback, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { debounce } from 'lodash';

import SmallProductCard from '../../components/Cards/SmallProductCard';
import { useAppDispatch, useAppSelector } from '../../store';
import { getProducts } from '../../store/actions/productsActions';
import { RESET_PRODUCTS } from '../../store/reducers/productsReducers';
import UIInput from '../../UI/Input';

const cardLoadingCount = Array.from(Array(4).keys());

const Products = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const { products, isLoading, noMoreResult } = useAppSelector((state) => state.productsReducers);

  const handleScroll = useCallback(
    async (e: Event) => {
      const target = e.target as Document;
      const scrollHeight = target.documentElement.scrollHeight;
      const currentHeight = Math.ceil(target.documentElement.scrollTop + window.innerHeight);
      if (currentHeight + 1 >= scrollHeight && !isLoading) {
        await dispatch(getProducts({ search }));
      }
    },
    [dispatch, search, isLoading],
  );

  const handleSearch = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(RESET_PRODUCTS());
    setSearch(e.target.value);
  }, 250);

  useEffect(() => {
    dispatch(getProducts({ search }));
  }, [dispatch, search]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, search]);

  return (
    <>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Typography fontWeight={700} fontSize='48px'>
            Welcome!
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <UIInput alt='search' placeholder='Search a product' onChange={handleSearch} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' spacing='40px' mt='2px'>
        {products?.map((product, key) => (
          <Grid item xs={12} md={4} lg={3} key={key}>
            <SmallProductCard product={product} />
          </Grid>
        ))}

        {noMoreResult ? (
          <Grid item xs={12}>
            <Typography textAlign='center'>Plus de résultat</Typography>
          </Grid>
        ) : (
          <>
            {cardLoadingCount.map((val) => (
              <Grid item xs={12} md={4} lg={3} key={val}>
                <SmallProductCard />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default Products;
