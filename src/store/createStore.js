import {applyMiddleware, combineReducers, createStore as reduxCreateStore} from "redux";
import {createItemReducer} from "../reducers/createItemReducer";
import {logger} from "redux-logger/src";
import {routerMiddleware, routerReducer} from "react-router-redux";

export const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      createItemReducer: createItemReducer,
      routerReducer: routerReducer,
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  );
};