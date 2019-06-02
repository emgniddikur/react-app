import React from 'react';
import {Button, TextField} from '@material-ui/core';

export const SearchForm = ({history}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    history.push(`/items/search?keyword=${input.value}`);
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
