import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {
  render() {
    return (
      <div className="Container">
       <div className="Header">
            <div>% of US Children Receiving Certain Vaccinations by Insurance Type, 2017 </div>
          </div>
        <div className="Graph">
            <div className="Graph-Description">For children aged 19–35 months </div>
              <div className="Graph-BarChart">
              {
                this.props.array.map((ins) => (
                  <div className="Graph-Bar" style={{height: ins.pct_est*this.props.multiplier + "%"}} >
                    {ins.insurance}: {ins.pct_est}% 
                  </div>
                ))
              }
              </div>
          </div>

          </div>
    );
  }
}

export default BarChart;