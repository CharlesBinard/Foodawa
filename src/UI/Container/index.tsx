import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const UIContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '800px',
  },

  [theme.breakpoints.up('md')]: {
    maxWidth: '900px',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '1200px',
  },

  [theme.breakpoints.up('xl')]: {
    maxWidth: '1400px',
  },
}));

export default UIContainer;
