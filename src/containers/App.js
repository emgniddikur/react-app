import React, {Component, Fragment} from 'react';
import Nav from "./Nav";
import ErrorMessage from "./ErrorMessage";
import {Route, Switch} from "react-router-dom";
import Index from "./Index";
import New from "./New";
import Search from "./Search";
import Auth from "./Auth";
import Edit from "../containers/Edit";
import {ErrorPage} from "../components/ErrorPage";
import {logInRequest} from "../actions/requests";
import {connect} from "react-redux";
import '../css/Fetching.css';
import Fetching from "../components/Fetching";

class App extends Component {
  componentWillMount() {
    this.props.logInRequest();
  }

  render() {
    return (
      <Fragment>
        <Fetching/>
        <Route component={Nav}/>
        <Route component={ErrorMessage}/>
        <Route exact path="/auth" component={Auth}/>
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
        <Route exact path="/error" component={ErrorPage}/>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching
  }),
  {logInRequest}
)(App);
