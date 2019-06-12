import {createBrowserHistory} from "history";
import {createStore} from "./store/createStore";
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "react-router-redux";
import App from "./containers/App";
import {Route} from "react-router-dom";

const history = createBrowserHistory();

const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
