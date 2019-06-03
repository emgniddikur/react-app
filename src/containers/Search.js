import React, {Fragment} from 'react';
import {SearchForm} from "../components/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {setSearchResults} from "../actions/items";

const Search = ({history, loading, searchResults}) => {
  return (
    <Fragment>
      {
        loading ? 'ロード中...' :
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
    loading: state.loadingReducer.loading,
    searchResults: state.itemReducer.searchResults
  }),
  {setSearchResults}
)(Search);
