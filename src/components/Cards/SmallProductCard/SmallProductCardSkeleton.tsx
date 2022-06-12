import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

const SmallProductCardSkeleton = () => {
  return (
    <Box
      p='12px'
      bgcolor='tertiary.dark'
      borderRadius='18px'
      boxShadow='0px 10px 40px rgba(0, 0, 0, 0.15)'
      minHeight='350px'
    >
      <Box height='200px'>
        <Skeleton animation='wave' height='200px' width='100%' />
      </Box>
      <Box justifyContent='space-between' display='flex'>
        <Skeleton animation='wave' height='20px' width='60%' />
        <Skeleton animation='wave' height='20px' width='30%' />
      </Box>
      <Box mt='12px'>
        <Skeleton animation='wave' height='100px' width='100%' />
      </Box>
    </Box>
  );
};

export default SmallProductCardSkeleton;
