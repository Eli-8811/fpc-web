import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';

import { themeMain } from '@themes/themes';
import { LoadingProvider } from '@providers/LoadingProvider';
import App from './App';
import store, { persistor } from './store';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={themeMain}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <LoadingProvider>
                <App />
              </LoadingProvider>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
