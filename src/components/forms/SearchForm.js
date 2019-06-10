import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {connect} from "react-redux";
import {inputKeyword} from "../../actions/items";

const SearchForm = ({history, keyword, inputKeyword}) => {
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      history.push(`/items/search?keyword=${keyword}`);
    }
  };

  const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{'aria-label': 'Search'}}
          value={keyword}
          onChange={e => inputKeyword(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
        />
      </div>
    </Fragment>
  );
};

export default connect(
  state => ({
    keyword: state.itemReducer.keyword
  }),
  {inputKeyword}
)(SearchForm);
