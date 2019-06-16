import {applyMiddleware, combineReducers, compose, createStore as reduxCreateStore} from "redux";
import {itemReducer} from "../reducers/itemReducer";
import {routerMiddleware, routerReducer} from "react-router-redux";
import {loadingReducer} from "../reducers/loadingReducer";
import {logger} from "redux-logger/src";
import {errorReducer} from "../reducers/errorReducer";
import {logInReducer} from "../reducers/logInReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import createSagaMonitor from '@clarketm/saga-monitor'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  level: "log",
  rootSagaStart: true,
  effectTrigger: true,
  effectResolve: true,
  actionDispatch: true
};

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: createSagaMonitor(config)
});

export const createStore = history => {
  const store = reduxCreateStore(
    combineReducers({
      itemReducer,
      routerReducer,
      loadingReducer,
      errorReducer,
      logInReducer
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
