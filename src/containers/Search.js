import React, {Component, Fragment} from 'react';
import {SearchForm} from "../components/SearchForm";
import {ItemList} from "../components/ItemList";
import {connect} from "react-redux";
import {setSearchResults} from "../actions/items";

class Search extends Component {
  constructor(props) {
    super(props);
    this.props.setSearchResults([]);
  }

  render() {
    const {
      history,
      searchResults
    } = this.props;
    return (
      <Fragment>
        <SearchForm history={history}/>
        <ItemList history={history} items={searchResults}/>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    searchResults: state.itemReducer.searchResults
  }),
  {setSearchResults}
)(Search);
