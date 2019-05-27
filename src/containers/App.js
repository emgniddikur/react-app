import React, {Fragment} from 'react';
import {Nav} from "./Nav";
import {Route, Switch} from "react-router-dom";
import Index from "./Index";
import New from "./New";
import Search from "./Search";
import Auth from "./Auth";
import Show from "./Show";
import Edit from "../containers/Edit";

export const App = () => {
  return (
    <Fragment>
      <nav>
        <Route path="/items" component={Nav}/>
      </nav>
      <main>
        <Route exact path="/auth" component={Auth}/>
        <Switch>
          <Route exact path="/items" component={Index}/>
          <Route exact path="/items/new" component={New}/>
          <Route
            exact path="/items/search"
            render={
              ({location, history}) => <Search keyword={location.keyword} history={history}/>
            }
          />
          <Route exact path="/items/:id" component={Show}/>
          <Route
            exact path="/items/:id/edit"
            render={
              ({match}) => <Edit itemId={match.params.id}/>
            }
          />
        </Switch>
      </main>
    </Fragment>
  );
};
