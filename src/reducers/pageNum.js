import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// This is our first reducer
const firstReducer = (state = [], action) => {
  // switch (action.type) {
  //   case 'FETCH_DATA':
  //     return action.payload;
  //   default:
  //     return state;
  // }
  if (action.type === 'POST_DATA') {
    console.log(`The data was ${action.payload}`);
  }
  return state;
};

// This is creating the store
// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  firstReducer
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));