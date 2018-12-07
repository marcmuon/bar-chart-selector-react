import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css';
import { BarChart } from '../../src';
import "typeface-special-elite";

class App extends Component {
  state = {
    vac: [[ 
      {
        "insurance": "Private Only",
        "pct_est": 96.5,
        "vaccine": "DTaP (≥3)"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 92.6,
        "vaccine": "DTaP (≥3)"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 78.2,
        "vaccine": "DTaP (≥3)"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 88.1,
        "vaccine": "HepA (≥1)"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 85.3,
        "vaccine": "HepA (≥1)"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 63.3,
        "vaccine": "HepA (≥1)"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 73,
        "vaccine": "HepB Birth"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 74.7,
        "vaccine": "HepB Birth"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 68.7,
        "vaccine": "HepB Birth"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 95.5,
        "vaccine": "Hib Primary"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 91.1,
        "vaccine": "Hib Primary"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 78,
        "vaccine": "Hib Primary"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 93.7,
        "vaccine": "MMR"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 90.4,
        "vaccine": "MMR"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 74.6,
        "vaccine": "MMR"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 94.5,
        "vaccine": "PCV (≥3)"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 90.5,
        "vaccine": "PCV (≥3)"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 75.2,
        "vaccine": "PCV (≥3)"
      }
  ],
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
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 92.9,
        "vaccine": "Varicella"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 90.4,
        "vaccine": "Varicella"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 69.5,
        "vaccine": "Varicella"
      }
  ],
  [ 
      {
        "insurance": "Private Only",
        "pct_est": 76,
        "vaccine": "Combined 7-vaccine"
      },
      {
        "insurance": "Any Medicaid",
        "pct_est": 66.5,
        "vaccine": "Combined 7-vaccine"
      },
      {
        "insurance": "No Insurance",
        "pct_est": 48.5,
        "vaccine": "Combined 7-vaccine"
      }
  ]],
    track: 0,
    mult: 1,
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