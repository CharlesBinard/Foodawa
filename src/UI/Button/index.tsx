import * as React from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

const UIButton: React.FC<ButtonProps> = (props) => {
  const { variant } = props;

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Button
      variant={variant || 'contained'}
      sx={{
        height: 48,
        borderRadius: '10px',
        textTransform: 'none',
        px: desktop ? '35px' : '10px',
        fontWeight: 700,
        fontSize: desktop ? '16px' : '14px',
      }}
      {...props}
    />
  );
};

export default UIButton;
