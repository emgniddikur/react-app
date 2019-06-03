import React, {Fragment} from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Index = ({history, loading, items}) => {
  return (
    <Fragment>
      {
        loading ? "ロード中" :
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
    loading: state.loadingReducer.loading,
    items: state.itemReducer.items
  })
)(Index);
