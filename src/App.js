import React from 'react';
import './App.css';
import Main from "./main";
import Sidebar from "./sidebar";

import store from "./store";
import _ from 'lodash';

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.map(contacts)} />
      <Main />
    </div>
  );
}

export default App;
