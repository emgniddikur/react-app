import {applyMiddleware, combineReducers, compose, createStore as reduxCreateStore} from "redux";
import {itemReducer} from "../reducers/itemReducer";
import {routerMiddleware, routerReducer} from "react-router-redux";
import {authTokenReducer} from "../reducers/authTokenReducer";
import {loadingReducer} from "../reducers/loadingReducer";
import {logger} from "redux-logger/src";
import {errorReducer} from "../reducers/errorReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const createStore = history => {
  const store = reduxCreateStore(
    combineReducers({
      itemReducer,
      routerReducer,
      authTokenReducer,
      loadingReducer,
      failureReducer: errorReducer
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
