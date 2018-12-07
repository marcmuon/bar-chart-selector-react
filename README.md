# bar-chart-selector-react 

This component is a button selector system that will re-draw bar charts from a JSON on click. Supports arbitrary number of chart elements along with vertical scaling. Useful for displaying scientific data along an interactive second dimension. 

### Demo

A demo using CDC survey data on childhood vaccination levels by insurance type is here: https://marcmuon.github.io/react-barchart-selector-components/index.html

### Installation

```
npm install --save bar-chart-selector-react   # using NPM
```

### Example use

```
import React, {Component} from 'react'
import { BarChart } from 'bar-chart-selector-react';

class App extends Component {
  state = {
    vac: [
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 95.2,
        "vaccine": "Poliovirus"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 91.2,
        "vaccine": "Poliovirus"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 77.9,
        "vaccine": "Poliovirus"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 81.8,
        "vaccine": "Rotavirus"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 66.8,
        "vaccine": "Rotavirus"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 51.5,
        "vaccine": "Rotavirus"
      }
  
  ]],
    track: 0,
    mult: 1,
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

```bar-chart-selector-react``` is licensed under a MIT license.


## Authors

* **Marc Kelechava** - *Initial work* - [Marc Muon](https://github.com/marcmuon)


