import React from 'react';
import './App.css';
import AppState from './context/App/AppState';

import Main from './components/Main';

const App = () => {
  return (
    <>
      <AppState>
        <Main />
      </AppState>
    </>
  );
};

export default App;
