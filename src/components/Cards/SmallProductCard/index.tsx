import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../store';
import { SET_CURRENT_PRODUCT } from '../../../store/reducers/productsReducers';
import { ProductType } from '../../../types';
import SmallProductCardSkeleton from './SmallProductCardSkeleton';

type Props = {
  product?: ProductType;
};

const SmallProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!product) return;
    dispatch(SET_CURRENT_PRODUCT(product));
    navigate(`/products/${product._id}`);
  };

  if (!product) {
    return <SmallProductCardSkeleton />;
  }

  return (
    <Box onClick={handleClick}>
      <Box
        p='12px'
        bgcolor='#FFF'
        borderRadius='18px'
        boxShadow='0px 10px 40px rgba(0, 0, 0, 0.15)'
        minHeight='330px'
      >
        <Box>
          <img
            src={product.image}
            alt='Foodawaa Logo'
            width='100%'
            height='200px'
            style={{ objectFit: 'cover', borderRadius: '18px' }}
          />
        </Box>

        <Box display='flex' justifyContent='space-between' mt='12px'>
          <Typography fontWeight={700}>
            {product.name.length > 20 ? `${product.name.slice(0, 20)} ...` : product.name}
          </Typography>
          <Typography color='tertiary.main' fontWeight={500}>
            {product.price.toFixed(2)}€
          </Typography>
        </Box>

        <Typography my='12px' fontSize='12px' color='tertiary.main'>
          {product.description.length > 150
            ? `${product.description.slice(0, 100)} ...`
            : product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SmallProductCard;
