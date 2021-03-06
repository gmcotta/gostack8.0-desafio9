import React from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import { store, persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} transition={Flip} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
