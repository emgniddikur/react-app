import React, {Fragment} from 'react';
import {connect} from "react-redux";

const ErrorMessage = ({message, details}) => {
  return (
    <Fragment>
      {
        message && (
          <Fragment>
            <p>{message}</p>
            {
              details && (
                <ul>
                  {
                    details.map((detail, index) => {
                      return <li key={index}>{detail}</li>;
                    })
                  }
                </ul>
              )
            }
          </Fragment>
        )
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
