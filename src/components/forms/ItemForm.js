import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import no_image from "../../images/no_image.jpeg";

export const ItemForm = ({itemId, formItem, inputTitle, inputDescription, inputPrice, inputImageSrc, createRequest, updateRequest}) => {
  const handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      inputImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
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
    image: {
      height: 100,
      objectFit: "contain"
    },
    inputFileBtnHide: {
      opacity: 0,
      appearance: "none",
      position: "absolute",
    },
    button: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h4" align="center">
              {itemId ? "編集" : "新規登録"}
            </Typography>
            <Button fullWidth component="label">
              <img src={formItem.imageSrc || no_image} alt="商品画像" className={classes.image}/>
              <input
                id="image-src"
                type="file"
                onChange={e => handleFileChange(e)}
                className={classes.inputFileBtnHide}
              />
            </Button>
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
              rows="3"
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
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              onClick={e => handleClick(e)}
            >
              送信
            </Button>
          </Container>
        </Paper>
      </main>
    </Fragment>
  );
};
