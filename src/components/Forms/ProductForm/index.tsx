import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';

import { ProductType } from '../../../types';
import UIButton from '../../../UI/Button';
import UIErrors from '../../../UI/Errors';
import UIInput from '../../../UI/Input';
import Category from '../../Category';

type Props = {
  onSubmit: (data: ProductType) => void;
  product?: ProductType;
  type?: 'UPDATE' | 'CREATE';
  isLoading?: boolean;
  errors?: string[];
};

const ProductForm: React.FC<Props> = ({
  onSubmit,
  isLoading,
  product,
  type = 'UPDATE',
  errors,
}) => {
  const { handleSubmit, control, formState } = useForm<ProductType>({
    defaultValues: {
      name: product?.name || '',
      description: product?.description || '',
      image: product?.image || '',
      price: product?.price || undefined,
      tags: product?.tags || [],
    },
    mode: 'onChange',
  });

  return (
    <Box border={2} p='40px' borderRadius='12px' borderColor='#D6D8E7' bgcolor='#FFF'>
      <Grid container direction='column' spacing='20px'>
        <UIErrors errors={errors} />
        <Grid item display='flex'>
          <Box
            bgcolor='primary.main'
            height='48px'
            width='48px'
            borderRadius='10px'
            alignItems='center'
            justifyContent='center'
            display='flex'
          >
            {type === 'UPDATE' ? (
              <EditIcon style={{ color: 'white' }} />
            ) : (
              <AddIcon style={{ color: 'white' }} />
            )}
          </Box>
          <Box ml='12px'>
            <Typography fontSize='18px' fontWeight={700}>
              {type === 'UPDATE' ? 'Edit product informations' : 'Add a new product'}
            </Typography>
            <Typography>Lorem Ipsum.</Typography>
          </Box>
        </Grid>

        <Grid item display='flex'>
          <Grid container columnSpacing='20px'>
            <Grid item xs={12} md={8}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true, minLength: 3, maxLength: 50 }}
                render={({ field: { onChange, value } }) => (
                  <UIInput
                    placeholder='Nom du produit'
                    title='Nom du produit'
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name='price'
                control={control}
                rules={{
                  required: true,
                  min: 1,
                  max: 1000,
                }}
                render={({ field: { onChange, value } }) => (
                  <UIInput
                    placeholder='0,00€'
                    title='Prix'
                    onChange={onChange}
                    value={value}
                    inputProps={{ inputMode: 'numeric' }}
                    type='number'
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Controller
            name='description'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <UIInput
                placeholder='Enter the description of your product here.'
                title='Description'
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name='image'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <UIInput placeholder='Paste URL' title='Image' onChange={onChange} value={value} />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name='tags'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <>
                <UIInput
                  placeholder='Write a tag and hit enter to add it.'
                  title='Tags'
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter' && !value.includes(e.currentTarget.value))
                      onChange([...value, e.currentTarget.value]);
                  }}
                />
                <Box mt='8px' display='flex'>
                  {value?.map((category, key) => (
                    <Box ml='10px' key={key} flexWrap='wrap'>
                      <Category
                        title={category}
                        index={key}
                        onDelete={() => {
                          onChange(value.filter((val) => val !== category));
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </>
            )}
          />
        </Grid>
        <Grid item>
          {!isLoading ? (
            <UIButton onClick={handleSubmit(onSubmit)} disabled={!formState.isValid}>
              {type === 'UPDATE' ? 'Update' : 'Add a new product'}
            </UIButton>
          ) : (
            <CircularProgress color='success' />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductForm;
