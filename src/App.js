import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columnContainer elementSpacing">
          <Button variant="contained" color="primary">Contained Button Primary</Button>
          <Button variant="text" color="primary">Text Button Primary</Button>
          <Button variant="outlined" color="primary">Outlined Button Primary</Button>
          <Button variant="fab" color="primary">Fab Button Primary</Button>
          <Button variant="extendedFab" color="primary">ExtendedFab Button Primary</Button>
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
      </div>
    );
  }
}

export default App;
