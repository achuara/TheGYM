import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/gymPic3.gif';
//import { Block } from '@material-ui/icons';

const HeroBanner = () => (
  <Box sx={{ gap: { lg: '130px' }, mt: { lg: '55px', xs: '0px' }, ml: { sm: '50px' }, display: { lg: 'flex', md: 'flex'  }  }}  position="relative" p="20px">
    
    <Box >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" sx={ {display: { lg: 'block', sm: 'block', xs: 'none' }}}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack sx={{mt: { xs: '0px', lg:'50px' }}}>
      <a href="#search" style={{  textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    {/*<Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
</Typography>*/}
   </Box>
   <Box
      component="img"
      sx={{
        ml: { xs: '40px'},
        mt: { xs: '30px', md: '-15px',lg:'-15px' },
        maxHeight: { xs: 280, sm:380, md: 380, lg:380 },
        maxWidth: { xs: 280,sm:380, md: 380, lg:380 },
      }}
      alt="gif"
      src={HeroBannerImage}
    />
  </Box>
);

export default HeroBanner;
