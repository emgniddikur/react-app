import React from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {showRequest} from "../actions/requests";

const Index = ({items, showRequest}) => {
  return <ItemList items={items} showRequest={showRequest}/>;
};

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {showRequest}
)(Index);
