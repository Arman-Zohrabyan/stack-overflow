/**
 * Author: Arman Zohrabyan
 *
 * Initial file.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './store/reducers';
import StackOverflow from './containers/StackOverflow';

// redux initialize
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={ store }>
    <StackOverflow />
  </Provider>,
  document.getElementById('root')
);
