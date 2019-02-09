import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ICO from "./smartContract/ICO"

class App extends Component {
  constructor(props){
    super(props);
    console.log("test");
    console.log(ICO);
    
  }

  componentDidMount(){
    this.getName();
  }
  
  getName() {
    return new Promise((resolve, reject) => {
      ICO.methods.name().call().then(result => {
        console.log(result);
        resolve(result);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui left aligned basic segment">
          <div className="ui huge header">Initial Coin Offering of PPC Token</div>
          <p>This utility token used for an ecosystem of PPC Organisation. The ICO event will last for 2 days and initial of 10000 will be offered to the early investors.</p>
          <p>The goal is reached when 10,000 Tokens are sold in 2 days, otherwise the Ether will be refunded to the investors.</p>
          <p>3 Tier offer:</p>
          The first 1000 Tokens = 0.0010 Ether
          <br></br>
          The second 2000 Tokens = 0.0012 Ethers (20 &#37; Increase value)
          <br></br>
          The rest of 7000 Tokens = 0.00144 Ether (40 &#37; Increase value)
        </div>
        <div className="ui section divider"></div>
        <div className="ui center aligned basic segment">
          <div className="ui center aligned container">
            <div className="ui large header">ICO Goal</div>
            <div className="ui red inverted progress">
              <div className="bar">
                <div className="progress"></div>
              </div>
            </div>
            <div className="ui input">
              <input type="text" placeholder="Number of tokens"/>
            </div>
            <div className="ui teal button">Teal</div>
          </div>
        </div>
        <div className="ui center aligned basic segment">
          <div className="ui medium header">Token Purchase History</div>
          <div className="ui list">
            <div className="item"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
