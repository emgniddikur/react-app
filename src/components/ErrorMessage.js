import React, {Fragment} from 'react';
import {connect} from "react-redux";

const ErrorMessage = ({message, details}) => {
  return (
    <Fragment>
      {message &&
      <Fragment>
        <p>{message}</p>
        <ul>
          {
            details !== null && Object.values(details).map((value, index) => {
              return <li key={index}>{value}</li>;
            })
          }
        </ul>
      </Fragment>
      }
    </Fragment>
  )
};

export default connect(
  state => ({
    message: state.failureReducer.message,
    details: state.failureReducer.details
  })
)(ErrorMessage)
