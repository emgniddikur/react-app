import {Button} from "@material-ui/core";
import React from "react";

export const ToIndexButton = ({history}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push("/items");
  };

  return (
    <Button
      onClick={e => handleClick(e)}
    >
      商品一覧
    </Button>
  );
};
