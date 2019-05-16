import React from 'react';
import {Route, Switch} from "react-router-dom";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Search from "./Search";

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ItemList}/>
        <Route exact path="/new" component={ItemForm}/>
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
            ({match}) => <ItemForm itemId={match.params.id}/>
          }
        />
      </Switch>
    </main>
  );
};
