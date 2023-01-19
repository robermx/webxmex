import { createTheme } from '@mui/material';

import '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    blue: string;
    red: string;
  }
}

const wxmBlue = '#311b92';
const wxmRed = '#f50057';

export default createTheme({
  palette: {
    common: {
      blue: wxmBlue,
      red: wxmRed,
    },
    primary: {
      main: wxmBlue,
    },
    secondary: {
      main: wxmRed,
    },
  },
});
