import createBrowserHistory from "history/createBrowserHistory";
import {createStore} from "./store/createStore";
import {render} from 'react-dom';
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router-dom";
import {Header} from "./containers/Header";
import {Main} from "./containers/Main";

const history = createBrowserHistory();

const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Route path="/" component={Header}/>
        <Main/>
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
