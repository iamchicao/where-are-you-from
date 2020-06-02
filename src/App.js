import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './pages/Main';
import store from './store';


function App() {
  return <div className="App">Teste</div>
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
