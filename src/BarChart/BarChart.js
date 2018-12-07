import React, { Component } from 'react';



class BarChart extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <div>% of US Children Receiving Certain Vaccinations by Insurance Type, 2017 </div>
        </div>
        
        <div className="Linklist" id="list">
            {
              this.props.array.map((title,index) => ( 
                  <button onClick={ ()=> this.props.gotClicked(index)}>{title[0].vaccine}</button>
                  ))
            }
            </div>
        <div className="Graph">
            <div className="Graph-Description">For children aged 19–35 months: {this.props.array[this.props.track][0].vaccine} </div>
              <div className="Graph-BarChart">
              {
                this.props.array.slice(this.props.track)[0].map((bar) => (
                  <div className="Graph-Bar" 
                    style={{height: bar.pct_est*this.props.multiplier + "%"}} >
                    {bar.insurance}: {bar.pct_est}% 
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