import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {item} from './reducers/item';
import {App} from './App';

const store = createStore(item, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
