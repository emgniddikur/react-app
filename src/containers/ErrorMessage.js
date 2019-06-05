import React, {Fragment} from 'react';
import {connect} from "react-redux";

const ErrorMessage = ({message, details}) => {
  return (
    <Fragment>
      {
        message &&
        <Fragment>
          <p>{message}</p>
          {
            details &&
            <ul>
              {
                Object.values(details).map((value, index) => {
                  return <li key={index}>{value}</li>;
                })
              }
            </ul>
          }
        </Fragment>
      }
    </Fragment>
  )
};

export default connect(
  state => ({
    message: state.errorReducer.message,
    details: state.errorReducer.details
  })
)(ErrorMessage)
