import {applyMiddleware, combineReducers, createStore as reduxCreateStore} from "redux";
import {itemReducer} from "../reducers/itemReducer";
import {logger} from "redux-logger/src";
import {routerMiddleware, routerReducer} from "react-router-redux";

export const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      itemReducer: itemReducer,
      routerReducer: routerReducer,
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  );
};
