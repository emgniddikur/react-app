import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Item} from "../components/Item";
import {connect} from "react-redux";
import {deleteItem} from "../actions";

const Show = ({itemId, items, deleteItem}) => {
  return (
    <Fragment>
      <Link to={"/" + itemId + "/edit"}>編集</Link>
      <Link to="/" onClick={() => deleteItem(itemId)}>削除</Link>
      <Item item={items.find(e => e.id === Number(itemId))}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {deleteItem}
)(Show);
