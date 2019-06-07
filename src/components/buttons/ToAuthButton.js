import React from 'react';
import {Button} from "@material-ui/core";

export const ToAuthButton = ({history}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push("/auth");
  };

  return <Button variant="contained" onClick={e => handleClick(e)}>認証</Button>;
};
