import React, {Fragment} from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Index = ({history, isFetching, items}) => {
  return (
    <Fragment>
      {
        isFetching ? "ロード中" :
          <ItemList
            history={history}
            items={items}
          />
      }
    </Fragment>
  );
};

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching,
    items: state.itemReducer.items
  })
)(Index);
