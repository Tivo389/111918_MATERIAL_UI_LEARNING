import React, { Fragment, Component } from 'react';
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
    borderRadius: 500,
    transitionDuration: '0.3s',
    '&:hover': {
      borderRadius: 0
    }
  },
  cardText: {
    textAlign: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  }
};

class SampleCardClassStyleStateful extends Component {
  render() {
    // 04: Since this is a class component, the component will receive the 'classes' as a props.
    // 05: And assign it to a variable called 'classes'
    const classes = this.props.classes;
    return(
      <Fragment>
        <Typography variant="h3" gutterBottom>
          –&emsp;CARD / CLASS STYLE / STATEFUL&emsp;–
        </Typography>
        {/* 00a: Style applied via class-styling. */}
        {/* 00b: Note that the syntax is a bit different from the stateless version. */}
        {/* 06: Now we can use it as such...  */}
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={ require('./lizard.jpeg') }
              title="Contemplative Reptile"
            />
            {/* 07: Another example  */}
            <CardContent className={classes.cardText}>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.justifyCenter}>
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
}

// 03: withStyles will take the 'styles' and pass it to this component as a props.
export default withStyles(styles)(SampleCardClassStyleStateful);