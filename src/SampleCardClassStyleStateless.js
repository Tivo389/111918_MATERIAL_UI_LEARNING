import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// 02: Import 'withStyles'. My understanding is that this is a higher-order-function.
import { withStyles } from '@material-ui/core/styles';

// 01: Make an object that has all the styles you need. 'const styles' in this case.
const styles = {
  card: {
    maxWidth: 345,
    borderRadius: 60
  },
  cardText: {
    textAlign: 'left'
  }
};

// 04: We will take the props...
function SampleCardClassStyleStateless(props) {
  // 05: And assign it to a variable called 'classes'
  const { classes } = props;
  return(
    <Fragment>
      <Typography variant="h3" gutterBottom>
        –&emsp;CARD / CLASS STYLE / STATELESS&emsp;–
      </Typography>
      {/* 00: Style applied via class-styling */}
      {/* 06: Now we can use it as such...  */}
      <Card className={ classes.card }>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={ require('./lizard.jpeg') }
          title="Contemplative Reptile"
        />
        {/* 07: Another example  */}
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

// 03: withStyles will take the 'styles' and pass it to this component as a props.
export default withStyles(styles)(SampleCardClassStyleStateless);