import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Item} from "../components/Item";
import {connect} from "react-redux";
import {deleteRequest} from "../actions/requests";

const Show = ({item, deleteRequest}) => {
  const id = item.id;

  return (
    <Fragment>
      <Link to={`/items/${id}/edit`}>編集</Link>
      <button onClick={() => deleteRequest(id)}>削除</button>
      <Item item={item}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    item: state.itemReducer.item
  }),
  {deleteRequest}
)(Show);
