import { ThemeOptions, CommonColors } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface CommonColors {
    blue: string;
    red: string;
    grayDark: string;
    lightBlue: string;
  }
}
