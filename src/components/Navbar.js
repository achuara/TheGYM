import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '100px', xs: '40px' }, mt: { xs: '32px', sm: '32px',lg: '20px'  }, justifyContent: 'none' }} px="20px" >
    <Stack sx={{ marginLeft: { lg: '70px', md: '70px', sm: '70px'} }}>
      <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '90px', height: '70px', marginTop: '25px' }} />
      </Link>
    </Stack>
    
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', marginBottom: '25px' }}>Home</Link>
      <a href="#search" style={{ textDecoration: 'none', color: '#3A1212', marginBottom: '25px' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
