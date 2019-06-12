import React, {Fragment} from "react";
import loadingImage from '../images/loading_image.gif'
import '../css/Loading.css';
import {connect} from "react-redux";

const Loading = ({isLoading}) => {
  return (
    <Fragment>
      {
        isLoading &&
        <div className="loading">
          <img src={loadingImage} alt="ローディング画像"/>
        </div>
      }
    </Fragment>
  );
};

export default connect(
  state => ({
    isLoading: state.loadingReducer.isLoading
  })
)(Loading)
