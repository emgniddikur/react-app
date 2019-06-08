import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

export const ItemForm = ({itemId, formItem, inputTitle, inputDescription, inputPrice, inputImageSrc, createRequest, updateRequest}) => {
  const handleFileChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = e => {
      inputImageSrc(e.target.result);
      document.getElementById("image").innerHTML = `<img src="${e.target.result}"/><br/>`;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleClick = e => {
    e.preventDefault();
    itemId ? updateRequest(itemId, formItem) : createRequest(formItem);
  };

  const useStyles = makeStyles(theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

  const inputFileBtnHide = {
    opacity: 0,
    appearance: "none",
    position: "absolute"
  };

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h4" align="center">
              新規作成
            </Typography>
            <Button component="label">
              商品画像
              <input
                id="image-src"
                type="file"
                onChange={e => handleFileChange(e)}
                style={inputFileBtnHide}
              />
            </Button>
            <output id="image">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB7A8VJAAEcmy75AAAAAElFTkSuQmCC"/>
            </output>
            <TextField
              id="title"
              label="商品タイトル"
              fullWidth
              value={formItem.title}
              onChange={e => inputTitle(e.target.value)}
            />
            <TextField
              id="description"
              label="商品説明"
              fullWidth
              multiline
              rows="5"
              value={formItem.description}
              onChange={e => inputDescription(e.target.value)}
            />
            <TextField
              id="price"
              label="価格"
              type="number"
              fullWidth
              value={formItem.price}
              onChange={e => inputPrice(e.target.value)}
            />
            <Button className={classes.button} variant="contained" color="primary" onClick={e => handleClick(e)}>
              {itemId ? "更新" : "新規登録"}
            </Button>
          </Container>
        </Paper>
      </main>
    </Fragment>
  );
};
