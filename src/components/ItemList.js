import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ToEditButton} from "./buttons/ToEditButton";
import DeleteButton from "./buttons/DeleteButton";
import {ItemImage} from "./ItemImage";

export const ItemList = ({history, items}) => {
  const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {items.map(item => {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <ItemImage imageSrc={item.imageSrc}/>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography>
                        {item.description}
                      </Typography>
                      <Typography>
                        ¥{item.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <ToEditButton history={history} itemId={item.id}/>
                      <DeleteButton itemId={item.id}/>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
};
