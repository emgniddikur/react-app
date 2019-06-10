import React from 'react';
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Search = ({history, isFetching, keyword, searchResults}) => {
  return <ItemList history={history} items={searchResults}/>;
};

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching,
    keyword: state.itemReducer.keyword,
    searchResults: state.itemReducer.searchResults
  })
)(Search);
