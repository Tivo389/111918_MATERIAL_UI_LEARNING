import React, { Fragment, Component } from 'react';

import Typography from '@material-ui/core/Typography';

class SampleTypographyObjectStyle extends Component {
  styles = {
    typographySample: {
      color: 'blue',
      fontSize: '1.6rem',
      fontWeight: 'bolder'
    }
  };
  render() {
    return(
      <Fragment>
        <Typography variant="h3" gutterBottom>
          –&emsp;TYPOGRAPHY / OBJECT STYLE&emsp;–
        </Typography>
        {/* Style applied via object-styling */}
        <Typography variant="body1" style={this.styles.typographySample}>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Fragment>
    )
  }
}

export default SampleTypographyObjectStyle;