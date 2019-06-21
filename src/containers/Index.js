import React from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Index = ({history, isLoading, items}) => {
  return (
    <ItemList
      history={history}
      items={items}
    />
  );
};

export default connect(
  state => ({
    isLoading: state.loadingReducer.isLoading,
    items: state.itemReducer.items
  })
)(Index);
