import React from 'react';
import {AuthForm} from "../components/AuthForm";
import {connect} from "react-redux";
import {requestAuthentication} from "../actions/requests";

const Auth = ({requestAuthentication}) => {
  return <AuthForm requestAuthentication={requestAuthentication}/>;
};

export default connect(
  null,
  {requestAuthentication}
)(Auth);
