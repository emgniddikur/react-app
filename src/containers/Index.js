import React from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Index = ({history, isFetching, items}) => {
  return (
    <ItemList
      history={history}
      items={items}
    />
  );
};

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching,
    items: state.itemReducer.items
  })
)(Index);
