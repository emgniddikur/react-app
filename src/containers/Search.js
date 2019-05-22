import React, {Fragment} from 'react';
import {SearchForm} from "../components/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";

const Search = ({keyword, history, items}) => {
  const searchResult = items.filter(e => e.title === keyword);

  return (
    <Fragment>
      <SearchForm history={history}/>
      <ItemList items={searchResult}/>
    </Fragment>
  );
};

export default connect(
  state => ({
    items: state.itemReducer.items
  })
)(Search);
