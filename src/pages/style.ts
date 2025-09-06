import type { SxProps } from '@mui/material';

interface loginStyleProps {
  [key: string]: SxProps;
}

export const loginStyle: loginStyleProps = {
  loginBannerSx:{
    maxHeight:'90vh',
    maxWidth:"100%"
  },

  TypographySx:{
    fontSize:'26px',
    color:"#252525ff",
    fontWeight:800,
    fontFamily:"sans-serif"
  },

  linkText:{
    fontSize:'14px',
    color:"#adadadff",
    fontWeight:500,
    fontFamily:"sans-serif"
  }
}