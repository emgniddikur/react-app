import React from 'react';
import {AuthForm} from "../components/forms/AuthForm";
import {connect} from "react-redux";
import {authRequest} from "../actions/requests";

const Auth = ({authRequest}) => {
  return <AuthForm authRequest={authRequest}/>;
};

export default connect(
  null,
  {authRequest}
)(Auth);
