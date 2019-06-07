import {Button} from "@material-ui/core";
import React from "react";

export const ToNewButton = ({history}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push('/items/new');
  };

  return <Button color="inherit" onClick={e => handleClick(e)}>新規登録</Button>;
};
