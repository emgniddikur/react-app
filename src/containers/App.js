import React, {Fragment} from 'react';
import Nav from "./Nav";
import ErrorMessage from "./ErrorMessage";
import {Route, Switch} from "react-router-dom";
import Index from "./Index";
import New from "./New";
import Search from "./Search";
import Auth from "./Auth";
import Edit from "../containers/Edit";
import {ErrorPage} from "../components/ErrorPage";
import '../css/Loading.css';
import Fetching from "./Loading";
import {connect} from "react-redux";

const App = ({isLoggedIn, message}) => {
  return (
    <Fragment>
      <Fetching/>
      <Route component={Nav}/>
      {
        message &&
        <Route component={ErrorMessage}/>
      }
      <Route exact path="/auth" component={Auth}/>
      {
        isLoggedIn &&
        <Fragment>
          <Switch>
            <Route exact path="/items" component={Index}/>
            <Route exact path="/items/new" component={New}/>
            <Route path="/items/search" component={Search}/>
            <Route
              exact path="/items/:id/edit"
              render={
                ({match}) => <Edit itemId={match.params.id}/>
              }
            />
          </Switch>
        </Fragment>
      }
      <Route exact path="/error" component={ErrorPage}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    message: state.errorReducer.message
  })
)(App);
