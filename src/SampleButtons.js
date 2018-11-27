import React, { Fragment, Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

class SampleButtons extends Component {
  render() {
    return(
      <Fragment>
        <Typography variant="h3">
          –&emsp;BUTTONS&emsp;–
        </Typography>
        {/* Use the 'variant' attribute to define the kind of btn. */}
        <Button variant="contained" color="primary">Contained Button Primary</Button>
        <Button variant="outlined" color="primary">Outlined Button Primary</Button>
        <Button variant="text" color="primary">Text Button Primary</Button>
        {/* fab = Floating Action Button. At the forefront of all content, hence 'floating' */}
        <Button variant="fab" color="primary">
          <AddIcon />
        </Button>
        <Button variant="fab" color="primary">
          <Icon>edit_icon</Icon>
        </Button>
        <Button variant="extendedFab" color="primary">Extended Fab Button Primary</Button>
      </Fragment>
    )
  }
}

export default SampleButtons;