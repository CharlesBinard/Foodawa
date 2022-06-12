import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import carrotLogo from '../../assets/images/carrotLogo.png';
import logo from '../../assets/images/logo.png';
import UIButton from '../../UI/Button';
import UIContainer from '../../UI/Container';

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleClickCatalog = () => {
    navigate('/products');
  };

  const handleClickAddProduct = () => {
    navigate('/products/create');
  };

  return (
    <Box
      position='static'
      color='inherit'
      bgcolor='white'
      sx={{ boxShadow: '0px 5px 24px rgba(65, 67, 78, 0.1)' }}
    >
      <Toolbar disableGutters>
        <UIContainer>
          {desktop ? (
            <Box display='flex' alignItems='center' height='100px' mr='78px'>
              <img src={logo} alt='Foodawaa Logo' height='30px' width='161px' />
            </Box>
          ) : (
            <Box display='flex' alignItems='center' height='100px' mr='5px'>
              <img src={carrotLogo} alt='Foodawaa Logo' height='30px' width='30px' />
            </Box>
          )}

          <Box flexGrow={1}>
            <UIButton
              variant='text'
              color='inherit'
              startIcon={<HomeIcon />}
              onClick={handleClickCatalog}
            >
              Catalogue Produits
            </UIButton>
          </Box>
          <UIButton startIcon={<AddIcon />} onClick={handleClickAddProduct}>
            Ajouter un produit
          </UIButton>
        </UIContainer>
      </Toolbar>
    </Box>
  );
};

export default Header;
