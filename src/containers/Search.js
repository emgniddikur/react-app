import React, {Fragment} from 'react';
import {SearchForm} from "../components/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {inputKeyword} from "../actions/items";

const Search = ({history, isFetching, keyword, searchResults, inputKeyword}) => {
  return (
    <Fragment>
      {
        isFetching ? 'ロード中...' :
          <Fragment>
            <SearchForm history={history} keyword={keyword} inputKeyword={inputKeyword}/>
            <ItemList history={history} items={searchResults}/>
          </Fragment>
      }
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
