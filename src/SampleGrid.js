import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class SampleGrid extends Component {
  render() {
    const classes = this.props.classes;
    return(
      <Fragment>
        <Typography variant="h3">
          –&emsp;GRID&emsp;–
        </Typography>
        {/* 01: Note container. 'spacing' defines the spacing between the item components. */}
        <Grid container spacing={24}>
          {/* 02: Note item. xs, md, pretty much the same as bootstrap. */}
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <p>xs=12 &amp; md=4</p>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
              <p>xs=6 &amp; md=4</p>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
              <p>xs=6 &amp; md=4</p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <p>xs=3</p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <p>xs=3</p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <p>xs=3</p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <p>xs=3</p>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(SampleGrid);