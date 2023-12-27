import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { border: '2px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '135px', height: '135px', cursor: 'pointer', gap: '30px' } 
    : { background: '#fff', borderBottomLeftRadius: '20px', width: '135px', height: '135px', cursor: 'pointer', gap: '30px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 950, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="22px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
