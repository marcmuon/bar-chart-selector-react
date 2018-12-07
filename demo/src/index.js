import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css';
import { BarChart } from '../../src';
import "typeface-special-elite";

class App extends Component {
  state = {
    vac: [],
    titles: [],
    buttons: [],
    mult: 15,
  }

  componentDidMount() {
    
    
    fetch('/demo/src/2017_dtap.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          vac: data,
        });
      });
  }

  barGen = (index) => {
    if (index === 0) {
      fetch('/demo/src/2017_dtap.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
      }
    else if (index === 1) {
      fetch('/demo/src/2017_polio.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
        this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 2) {
      fetch('/demo/src/2017_mmr.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
          this.state.titles[i].dark = false;
        } 
      }
      this.setState(this.state);
    }
    else if (index === 3) {
      fetch('/demo/src/2017_hib.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 4) {
      fetch('/demo/src/2017_hepb.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        } 
      }
      this.setState(this.state);
    }
    else if (index === 5) {
      fetch('/demo/src/2017_varicella.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);  
    }
    else if (index === 6) {
      fetch('/demo/src/2017_pcv.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 7) {
      fetch('/demo/src/2017_hepa.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 8) {
      fetch('/demo/src/2017_rota.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 9) {
      fetch('/demo/src/2017_combined.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
  }

  render() {    
    return (
      <div className="App">
          <BarChart
          array={this.state.vac}
          multiplier={this.state.mult/15}>
          </BarChart>
        </div>
    );
  }
}

render(<App/>, document.querySelector('#demo'))