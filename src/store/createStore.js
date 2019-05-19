import {applyMiddleware, combineReducers, compose, createStore as reduxCreateStore} from "redux";
import {items} from "../reducers/items";
import {routerMiddleware, routerReducer} from "react-router-redux";
import {logger} from "redux-logger/src";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      itemReducer: items,
      routerReducer: routerReducer,
    }),
    composeEnhancers(
      applyMiddleware(
        logger,
        routerMiddleware(history)
      )
    )
  );
};
