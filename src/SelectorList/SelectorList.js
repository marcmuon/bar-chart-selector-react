import React, { Component } from 'react';
import './SelectorList.css';

class SelectorList extends Component {
  render() {
    return (
        <div className="Linklist" id="list">
            {
              this.props.array.map((title, index) => ( 
                  <button className={title.dark === true ? "Button-Dark": "Button-Light"} onClick={()=> this.props.gotClicked(index)} >{title.Vaccine}</button>
                  ))
            }
            </div>
    );
  }
}

export default SelectorList;

