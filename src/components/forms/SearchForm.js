import React, {Fragment} from 'react';
import {Button, TextField} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const SearchForm = ({history, keyword, inputKeyword}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push(`/items/search?keyword=${keyword}`);
  };

  return (
    <Fragment>
      <CssBaseline/>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5" align="center">
          検索
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="keyword"
            label="キーワード"
            value={keyword}
            onChange={e => inputKeyword(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={e => handleClick(e)}
          >
            検索
          </Button>
        </form>
      </Container>
    </Fragment>
  );
};
