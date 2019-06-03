import React, {Fragment} from 'react';
import {SearchForm} from "../components/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {setSearchResults} from "../actions/items";

const Search = ({history, isFetching, searchResults}) => {
  return (
    <Fragment>
      {
        isFetching ? 'ロード中...' :
          <Fragment>
            <SearchForm history={history}/>
            <ItemList history={history} items={searchResults}/>
          </Fragment>
      }
    </Fragment>
  );
};

export default connect(
  state => ({
    isFetching: state.loadingReducer.isFetching,
    searchResults: state.itemReducer.searchResults
  }),
  {setSearchResults}
)(Search);
