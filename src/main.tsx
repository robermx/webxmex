import React from 'react';
import ReactDOM from 'react-dom/client';

import WebXMex from './WebXMex';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <WebXMex />
  </React.StrictMode>
);
