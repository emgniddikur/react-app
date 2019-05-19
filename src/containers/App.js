import React, {Fragment} from 'react';
import {Nav} from "./Nav";
import {Route, Switch} from "react-router-dom";
import Index from "./Index";
import New from "./New";
import Search from "./Search";
import Show from "./Show";
import Edit from "../containers/Edit";

export const App = () => {
  return (
    <Fragment>
      <nav>
        <Route path="/" component={Nav}/>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Index}/>
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
              ({match}) => <Show itemId={match.params.id}/>
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
    </Fragment>
  );
};
