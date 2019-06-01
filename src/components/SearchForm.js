import React from 'react';
import {Button, TextField} from '@material-ui/core';

export const SearchForm = ({searchRequest}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    searchRequest(input.value);
  };

  return (
    <form>
      <TextField
        id="keyword"
        label="キーワード"
        inputRef={node => input = node}
      />
      <Button variant="contained" color="primary" onClick={e => handleClick(e)}>
        検索
      </Button>
    </form>
  );
};
