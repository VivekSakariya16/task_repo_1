import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Parent from './Parent';

function App() {
  return (
    <Provider store={store}>
      <center>
        <h1>Task 1</h1>
        <Parent />
      </center>
    </Provider>
  );
}

export default App;
