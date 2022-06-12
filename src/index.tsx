import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from './store';
import theme from './theme';

axios.defaults.baseURL = 'https://technical-test-frontend.herokuapp.com/api/';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
);
