import React, {Fragment} from 'react';
import {SearchForm} from "../components/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {searchRequest} from "../actions/requests";

const Search = ({items, searchRequest}) => {
  return (
    <Fragment>
      <SearchForm searchRequest={searchRequest}/>
      <ItemList items={items}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {searchRequest}
)(Search);
