# react-barchart-selector-components 

This component is a button selector system that will re-draw bar charts from a JSON on click. Supports arbitrary number of chart elements along with vertical scaling. Useful for displaying scientific data along an interactive second dimension. 

### Demo

A demo using CDC survey data on childhood vaccination levels by insurance type is here: https://marcmuon.github.io/react-barchart-selector-components/index.html

### Installation

```
npm install --save react-barchart-selector-components   # using NPM

```

### Example use

```
import React, {Component} from 'react'
import { BarChart } from '../../src';
import "typeface-special-elite";

class App extends Component {
  state = {
    vac: [],
    track: 0,
    mult: 1,
  }
  componentDidMount() {
    fetch('/demo/src/vac.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          vac: data,
        });
      });
  }

  barGen = (index) => {
    this.setState({
      track: index,
    });
  }

  render() {    
    return (
        <BarChart
          array={this.state.vac}
          multiplier={this.state.mult}
          track={this.state.track}
          gotClicked={this.barGen}
        >
        </BarChart>
      </div>
    );
  }
}

```

## License

```react-barchart-selector-components``` is licensed under a MIT license.


## Authors

* **Marc Kelechava** - *Initial work* - [Marc Muon](https://github.com/marcmuon)


