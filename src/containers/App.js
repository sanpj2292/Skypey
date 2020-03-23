import React from 'react';
import './App.css';
import Main from "../components/main";
import Sidebar from "../components/sidebar";

import store from "../store";
import _ from 'lodash';

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.map(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
