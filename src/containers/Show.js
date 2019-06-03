import React, {Fragment} from 'react';
import {Item} from "../components/Item";
import {connect} from "react-redux";

const Show = ({history, loading, item}) => {
  return (
    <Fragment>
      {
        loading ? 'ロード中...' :
          <Item
            history={history}
            item={item}
          />
      }
    </Fragment>
  );
};

export default connect(
  state => ({
    loading: state.loadingReducer.loading,
    item: state.itemReducer.item
  })
)(Show);
