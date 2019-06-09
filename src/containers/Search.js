import React, {Fragment} from 'react';
import {SearchForm} from "../components/forms/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {inputKeyword} from "../actions/items";

const Search = ({history, isFetching, keyword, searchResults, inputKeyword}) => {
  return (
    <Fragment>
      <SearchForm history={history} keyword={keyword} inputKeyword={inputKeyword}/>
      <ItemList history={history} items={searchResults}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching,
    keyword: state.itemReducer.keyword,
    searchResults: state.itemReducer.searchResults
  }),
  {inputKeyword}
)(Search);
