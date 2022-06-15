import React from 'react';

import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { ProductType } from '../../../types';
import UIButton from '../../../UI/Button';
import Category from '../../Category';
import BigProductCardSkelon from './BigProductCardSkelon';

type Props = {
  product?: ProductType;
};

const BigProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const handleClickUpdateProduct = () => {
    if (!product) return;
    navigate(`/products/${product._id}/update`);
  };

  if (!product) {
    return <BigProductCardSkelon />;
  }

  return (
    <Box>
      <Grid container alignItems='start' spacing='72px'>
        <Grid item sm={12} md={7}>
          <img
            src={product.image}
            alt='product'
            width='100%'
            height='100%'
            style={{ borderRadius: '30px', maxHeight: '450px', objectFit: 'cover' }}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box display='flex' justifyContent='space-between' alignItems='end'>
            <Typography fontSize='32px' fontWeight={700} mr='10px'>
              {product.name}
            </Typography>
            <Typography fontSize='48px' fontWeight={700}>
              {product.price}€
            </Typography>
          </Box>

          <Box my='28px'>
            <Stack direction='row' spacing={1}>
              {product.tags.map((title, key) => (
                <Category title={title} key={key} index={key} />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography fontSize='24px' fontWeight={700}>
              Description :
            </Typography>
            <Typography fontSize='24px' color='tertiary.main' mt='12px'>
              {product.description}
            </Typography>
          </Box>

          <Box mt='25px'>
            <UIButton startIcon={<EditIcon />} onClick={handleClickUpdateProduct}>
              Modifier
            </UIButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigProductCard;
