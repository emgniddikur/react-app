import React from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Index = ({items}) => {
  return <ItemList items={items}/>;
};

export default connect(
  state => ({
    items: state.itemReducer.items
  })
)(Index);
