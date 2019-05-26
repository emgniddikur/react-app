import React from 'react';
import {AuthForm} from "../components/AuthForm";
import {connect} from "react-redux";
import {authenticationRequest} from "../actions/requests";

const Auth = ({authenticationRequest}) => {
  return <AuthForm authenticationRequest={authenticationRequest}/>;
};

export default connect(
  state => ({
    authToken: state.authTokenReducer.authToken
  }),
  {authenticationRequest}
)(Auth);
