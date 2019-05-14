import React from 'react';
import {Route, Switch} from "react-router-dom";
import ItemList from "../containers/ItemList";
import ItemForm from "../containers/ItemForm";
import Item from "../containers/Item";

export const Main = () => {
  return (
    <main>
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
    </main>
  );
};