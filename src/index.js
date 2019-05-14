import createBrowserHistory from "history/createBrowserHistory";
import {createStore} from "./store/createStore";
import {render} from 'react-dom';
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "react-router-redux";
import {Route, Switch} from "react-router-dom";
import {Header} from "./containers/Header";
import ItemList from "./containers/ItemList";
import Item from "./containers/Item";
import ItemForm from "./containers/ItemForm";

const history = createBrowserHistory();

const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact path="/" component={ItemList}/>
          <Route exact path="/new" component={ItemForm}/>
          <Route
            exact path="/:id"
            render={
              ({match}) => <Item itemId={match.params.id}/>
            }
          />
        </Switch>
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
