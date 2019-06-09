import React, {Fragment} from "react";
import loading from '../images/loading.gif'
import '../css/Fetching.css';
import {connect} from "react-redux";

const Fetching = ({isFetching}) => {
  return (
    <Fragment>
      {
        isFetching ? (
          <div className="c-loader__mask">
            <img src={loading}/>
          </div>
        ) : (
          null
        )
      }
    </Fragment>
  );
};

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching
  })
)(Fetching)
