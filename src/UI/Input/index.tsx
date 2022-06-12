import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, styled } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const CustomTextField = styled(TextField)({
  marginTop: '4px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    height: '48px',
    borderRadius: '10px',
  },
});

type Props = {
  alt?: 'search';
  title?: string;
} & TextFieldProps;

const UIInput: React.FC<Props> = (props) => {
  const { title, alt } = props;
  return (
    <FormControl variant='standard' sx={{ width: '100%' }}>
      {title && (
        <Typography fontSize='14px' fontWeight={600}>
          {title}
        </Typography>
      )}
      <CustomTextField
        hiddenLabel
        variant='outlined'
        InputProps={{
          startAdornment:
            alt === 'search' ? (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: '#A0A3BD' }} />
              </InputAdornment>
            ) : undefined,
        }}
        {...props}
      />
    </FormControl>
  );
};

export default UIInput;
