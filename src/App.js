import React, { Component } from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columnContainer elementSpacing">
          <Button variant="contained" color="primary">Contained Button Primary</Button>
          <Button variant="text" color="primary">Text Button Primary</Button>
          <Button variant="outlined" color="primary">Outlined Button Primary</Button>
          <Button variant="fab" color="primary">
            <AddIcon />
          </Button>
          <Button variant="fab" color="primary">
            <Icon>edit_icon</Icon>
          </Button>
          <Button variant="extendedFab" color="primary">Extended Fab Button Primary</Button>
        </div>
        <div className="columnContainer">
          <Typography component="h2" variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
              h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
              h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
              h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
              h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
              h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" gutterBottom>
              button text
          </Typography>
          <Typography variant="caption" gutterBottom>
              caption text
          </Typography>
          <Typography variant="overline" gutterBottom>
              overline text
          </Typography>
        </div>
        <div className="columnContainer">
          <Card>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={ require('./lizard.jpeg') }
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
        </div>
      </div>
    );
  }
}

export default App;
