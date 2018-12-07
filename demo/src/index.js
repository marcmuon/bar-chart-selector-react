import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css';
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
    console.log('clickin');
  }

  render() {    
    return (
      <div className="App">
        <div className="Container-Text">
            <div >"The percentage of children who have received no vaccines has increased, reaching 1.3% for children born in 2015, compared with 0.3% among those 19–35 months when surveyed in 2001. <br/><br/>Some children might be unvaccinated because of choices made by parents, whereas for others, lack of access to health care or health insurance might be factors. <br/><br/>Unvaccinated children in the 2017 NIS-Child were disproportionately uninsured: 17.2% of unvaccinated children were uninsured, compared with 2.8% of all children."<br/><br/><span style={{fontSize: 15 + "px"}}><em>-Vaccination Coverage Among Children Aged 19–35 Months — United States, <a href="https://www.cdc.gov/mmwr/volumes/67/wr/mm6740a4.htm?s_cid=mm6740a4_w" rel="noopener noreferrer" target='_blank' >2017.</a></em></span></div>
        </div>
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

render(<App/>, document.querySelector('#demo'))