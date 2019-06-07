import React from 'react';
import {Button, TextField} from '@material-ui/core';

export const SearchForm = ({history, keyword, inputKeyword}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push(`/items/search?keyword=${keyword}`);
  };

  return (
    <form>
      <TextField
        id="keyword"
        label="キーワード"
        value={keyword}
        onChange={e => inputKeyword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={e => handleClick(e)}>
        検索
      </Button>
    </form>
  );
};
