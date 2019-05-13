import createBrowserHistory from "history/createBrowserHistory";
import {createStore} from "./store/createStore";
import {render} from 'react-dom';
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router-dom";
import {Header} from "./containers/Header";
import ItemForm from "./containers/ItemForm";
import ItemList from "./containers/ItemList";

const history = createBrowserHistory();

const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={ItemList}/>
        <Route exact path="/new" component={ItemForm}/>
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
