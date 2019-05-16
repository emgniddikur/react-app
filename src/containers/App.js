import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Nav} from "../components/Nav";
import ItemList from "../containers/ItemList";
import New from "./New";
import Search from "./Search";
import Item from "../containers/Item";
import Edit from "../containers/Edit";

export const App = () => {
  return (
    <main>
      <Route path="/" component={Nav}/>
      <Switch>
        <Route exact path="/" component={ItemList}/>
        <Route
          exact path="/new"
          render={
            ({history}) => <New history={history}/>
          }
        />
        <Route
          exact path="/search"
          render={
            ({location, history}) => <Search keyword={location.keyword} history={history}/>
          }
        />
        <Route
          exact path="/:id"
          render={
            ({match}) => <Item itemId={match.params.id}/>
          }
        />
        <Route
          exact path="/:id/edit"
          render={
            ({match, history}) => <Edit itemId={match.params.id} history={history}/>
          }
        />
      </Switch>
    </main>
  );
};
