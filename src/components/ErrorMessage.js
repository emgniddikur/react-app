import React, {Fragment} from 'react';

export const ErrorMessage = ({message, details}) => {
  return (
    <Fragment>
      <p>{message}</p>
      <ul>
        {
          details !== undefined && details !== null && Object.values(details).map((value, index) => {
            return <li key={index}>{value}</li>;
          })
        }
      </ul>
    </Fragment>
  )
};
