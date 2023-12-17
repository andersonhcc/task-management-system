import React from 'react';
import Home from './pages/Home';
import { theme } from './styles/theme';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './redux';

function App() {

  return (
    <Provider store={store}>
      <ConfigProvider theme={{ token: theme }}>
        <Home />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
