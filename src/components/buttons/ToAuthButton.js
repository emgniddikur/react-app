import React from 'react';
import {Button} from "@material-ui/core";

export const ToAuthButton = ({history}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push("/auth");
  };

  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={e => handleClick(e)}
    >
      ログイン
    </Button>
  );
};
