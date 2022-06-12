import React from 'react';

import { useTheme } from '@mui/material';
import Chip, { ChipProps } from '@mui/material/Chip';

type Props = {
  title: string;
  index?: number;
} & ChipProps;

const Category: React.FC<Props> = (props) => {
  const { index, title } = props;
  const theme = useTheme();

  const isPair = (index && index % 2 === 0) || index === 0;

  return (
    <Chip
      label={title.charAt(0).toUpperCase() + title.slice(1)}
      sx={{
        color: isPair ? theme.palette.primary.main : theme.palette.secondary.main,
        backgroundColor: isPair ? theme.palette.primary.light : theme.palette.secondary.light,
      }}
      {...props}
    />
  );
};

export default Category;
