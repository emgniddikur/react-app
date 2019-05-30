import React from 'react';
import {AuthForm} from "../components/AuthForm";
import {connect} from "react-redux";
import {authRequest} from "../actions/requests";

const Auth = ({authRequest}) => {
  return <AuthForm authRequest={authRequest}/>;
};

export default connect(
  null,
  {authRequest: authRequest}
)(Auth);
