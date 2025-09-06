import type { SxProps } from '@mui/material';

interface dashboardStyleProps {
  [key: string]: SxProps;
}

export const dashboardStyle: dashboardStyleProps = {
  dashBoardHeadSx:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:10,
    marginBottom:1
  },
  rootsx:{
    alignItems:"center",
  },

  head:{
    fontSize:'26px',
    color:"#00202 !important",
    fontWeight:700,
    margin:0
  }
}