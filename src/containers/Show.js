import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Item} from "../components/Item";
import {connect} from "react-redux";
import {deleteRequest} from "../actions/requests";

const Show = ({itemId, items, deleteRequest}) => {
  return (
    <Fragment>
      <Link to={`/items/${itemId}/edit`}>編集</Link>
      <button onClick={() => deleteRequest(itemId)}>削除</button>
      <Item item={items.find(e => e.id === Number(itemId))}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {deleteRequest}
)(Show);
