import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
    borderRadius: 60
  },
  cardText: {
    textAlign: 'left'
  }
};

function CardClass(props) {
  const { classes } = props;
  return(
    <Fragment>
      <Typography variant="h3" gutterBottom>
        –&emsp;CARD / CLASS STYLE / STATELESS&emsp;–
      </Typography>
      <Card className={ classes.card }>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={ require('./lizard.jpeg') }
          title="Contemplative Reptile"
        />
        <CardContent className={ classes.cardText }>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  )
}

export default withStyles(styles)(CardClass);