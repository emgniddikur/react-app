import React from 'react';
import {deleteRequest} from '../actions/requests';
import {connect} from "react-redux";
import {Button} from "@material-ui/core";

const DeleteButton = ({itemId, deleteRequest}) => {
  const handleClick = e => {
    e.preventDefault();
    deleteRequest(itemId);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={e => handleClick(e)}
    >
      削除
    </Button>
  );
};

export default connect(
  null,
  {deleteRequest}
)(DeleteButton);
