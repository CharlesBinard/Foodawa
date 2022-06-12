import React from 'react';

import { Box } from '@mui/material';

import UIContainer from '../../UI/Container';
import Header from '../Header';

// import Header from 'components/header';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh' bgcolor='#F8F9FB'>
      <Header />
      <UIContainer>
        <Box flex='1' my='37px'>
          {children}
        </Box>
      </UIContainer>
    </Box>
  );
};
export default DefaultLayout;
