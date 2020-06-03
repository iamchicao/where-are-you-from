import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './pages/Main';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Main />
      <ToastContainer autoclose={5000} />
    </Provider>
  );
}

export default App;
