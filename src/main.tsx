import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';

import WebXMex from './WebXMex';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <WebXMex />
  </React.StrictMode>
);
