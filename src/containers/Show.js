import React, {Fragment} from 'react';
import {Item} from "../components/Item";
import {connect} from "react-redux";

const Show = ({history, isFetching, item}) => {
  return (
    <Fragment>
      {
        isFetching ? 'ロード中...' :
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
    isFetching: state.loadingReducer.isFetching,
    item: state.itemReducer.item
  })
)(Show);
