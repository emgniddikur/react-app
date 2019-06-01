import React, {Fragment} from 'react';
import {Item} from "../components/Item";
import {connect} from "react-redux";

const Show = ({history, item, deleteRequest}) => {
  return (
    <Fragment>
      <Item
        history={history}
        item={item}
        deleteRequest={deleteRequest}
      />
    </Fragment>
  );
};

export default connect(
  state => ({
    item: state.itemReducer.item
  })
)(Show);
