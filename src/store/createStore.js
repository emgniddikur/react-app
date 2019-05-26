import {applyMiddleware, combineReducers, compose, createStore as reduxCreateStore} from "redux";
import {items} from "../reducers/items";
import {routerMiddleware, routerReducer} from "react-router-redux";
import {authToken} from "../reducers/authToken";
import {logger} from "redux-logger/src";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const createStore = history => {
  const store = reduxCreateStore(
    combineReducers({
      itemReducer: items,
      routerReducer: routerReducer,
      authTokenReducer: authToken
    }),
    composeEnhancers(
      applyMiddleware(
        logger,
        routerMiddleware(history),
        sagaMiddleware
      )
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
