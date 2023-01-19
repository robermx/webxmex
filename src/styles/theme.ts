import { createTheme } from '@mui/material';

const wxmBlue = '#1a237e ';
const wxmRed = '#f50057';
const wxmDark = '#263238';
const wxmLight = '#b3e5fc';

export const theme = createTheme({
  palette: {
    common: {
      blue: wxmBlue,
      red: wxmRed,
      grayDark: wxmDark,
      lightBlue: wxmLight,
    },
    primary: {
      main: wxmBlue,
    },
    secondary: {
      main: wxmDark,
    },
    error: {
      main: wxmRed,
    },
    info: {
      main: wxmLight,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});
