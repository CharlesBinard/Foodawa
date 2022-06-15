import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import ErrorPng from '../assets/images/404.png';
import UIButton from '../UI/Button';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/`);
  };

  return (
    <Box display='flex' alignItems=' center' flexDirection='column'>
      <Box maxWidth='500px' maxHeight='500px'>
        <img src={ErrorPng} alt='product' width='100%' />
      </Box>
      <Box mt='25px'>
        <UIButton onClick={handleClickHome}>Back to home</UIButton>
      </Box>
    </Box>
  );
};

export default NotFound;
