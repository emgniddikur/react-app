import {Button} from "@material-ui/core";
import React from "react";

export const ToSearchButton = ({history}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push("/items/search")
  };

  return (
    <Button
      onClick={e => handleClick(e)}
    >
      検索
    </Button>
  );
};
