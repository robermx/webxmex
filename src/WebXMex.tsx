import { ThemeProvider } from '@mui/material';

import Header from './components/ui/Header';
import { theme } from './styles/theme';

const WebXMex = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      hello!
    </ThemeProvider>
  );
};

export default WebXMex;
