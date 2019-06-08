import {Button} from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";
import {logOutRequest} from "../../actions/requests";

const LogOutButton = ({logOutRequest}) => {
  const handleClick = e => {
    e.preventDefault();
    logOutRequest();
  };

  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={e => handleClick(e)}
    >
      ログアウト
    </Button>
  );
};

export default connect(
  null,
  {logOutRequest}
)(LogOutButton);
