import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const BigProductCardSkelon = () => {
  return (
    <Box
      p='12px'
      bgcolor='tertiary.dark'
      borderRadius='18px'
      boxShadow='0px 10px 40px rgba(0, 0, 0, 0.15)'
      minHeight='350px'
    >
      <Grid container alignItems='start' spacing='72px'>
        <Grid item sm={12} md={6}>
          <Skeleton animation='wave' height='450px' width='100%' />
        </Grid>
        <Grid item sm={12} md={6}>
          <Box display='flex' justifyContent='space-between' alignItems='end'>
            <Skeleton animation='wave' height='100px' width='50%' />
            <Skeleton animation='wave' height='100px' width='20%' />
          </Box>
          <Box my='28px'>
            <Stack direction='row' spacing={1}>
              <Skeleton animation='wave' height='30px' width='10%' />
              <Skeleton animation='wave' height='30px' width='10%' />
              <Skeleton animation='wave' height='30px' width='10%' />
            </Stack>
          </Box>
          <Box>
            <Skeleton animation='wave' height='100px' width='100%' />
            <Skeleton animation='wave' height='100px' width='100%' />
          </Box>
          <Box mt='25px'>
            <Skeleton animation='wave' height='100px' width='25%' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigProductCardSkelon;
