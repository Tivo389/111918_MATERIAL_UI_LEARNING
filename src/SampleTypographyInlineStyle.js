import React, { Fragment, Component } from 'react';

import Typography from '@material-ui/core/Typography';

class SampleTypographyInlineStyle extends Component {
  render() {
    return(
      <Fragment>
        <Typography variant="h3" gutterBottom>
          –&emsp;TYPOGRAPHY / INLINE STYLE&emsp;–
        </Typography>
        {/* Style applied via inline-styling */}
        <Typography variant="h1" style={{ border: '1px solid red' }} gutterBottom>
          h1. Heading
        </Typography>
      </Fragment>
    )
  }
}

export default SampleTypographyInlineStyle;