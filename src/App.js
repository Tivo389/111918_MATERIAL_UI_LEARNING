import React, { Component } from 'react';
import './App.css';

import SampleButtons from './SampleButtons';
import SampleCardClassStyleStateful from './SampleCardClassStyleStateful';
import SampleCardClassStyleStateless from './SampleCardClassStyleStateless';
import SampleCardInlineStyle from './SampleCardInlineStyle';
import SampleCardObjectStyle from './SampleCardObjectStyle';
import SampleGrid from './SampleGrid';
import SampleTypography from './SampleTypography';
import SampleTypographyInlineStyle from './SampleTypographyInlineStyle';
import SampleTypographyObjectStyle from './SampleTypographyObjectStyle';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="columnContainer elementSpacing">
          <SampleButtons></SampleButtons>
        </div>

        <div className="columnContainer">
          <SampleTypography></SampleTypography>
        </div>

        <div className="columnContainer">
          <SampleTypographyInlineStyle></SampleTypographyInlineStyle>
        </div>

        <div className="columnContainer">
          <SampleTypographyObjectStyle></SampleTypographyObjectStyle>
        </div>

        <div className="columnContainer">
          <SampleCardInlineStyle></SampleCardInlineStyle>
        </div>

        <div className="columnContainer">
          <SampleCardObjectStyle></SampleCardObjectStyle>
        </div>

        <div className="columnContainer">
          <SampleCardClassStyleStateless></SampleCardClassStyleStateless>
        </div>

        <div className="columnContainer">
          <SampleCardClassStyleStateful></SampleCardClassStyleStateful>
        </div>

        <div className="columnContainer">
          <SampleGrid></SampleGrid>
        </div>

      </div>
    );
  }
}

export default App;
