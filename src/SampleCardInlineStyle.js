import React, { Fragment, Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class SampleCardInline extends Component {
  render() {
    return(
      <Fragment>
        <Typography variant="h3" gutterBottom>
          –&emsp;CARD / INLINE STYLE&emsp;–
          </Typography>
        {/* Style applied via inline-styling */}
        <Card style={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={require('./lizard.jpeg')}
              title="Contemplative Reptile"
            />
            <CardContent>
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
}

export default SampleCardInline;