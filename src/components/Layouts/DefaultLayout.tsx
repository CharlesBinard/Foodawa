import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import UIContainer from '../../UI/Container';
import Header from '../Header';

const DefaultLayout = () => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh' bgcolor='#F8F9FB'>
      <Header />
      <UIContainer>
        <Box flex='1' my='37px'>
          <Outlet />
        </Box>
      </UIContainer>
    </Box>
  );
};
export default DefaultLayout;
