import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

 constructor() {
    super();
    this.state = {html: 'sample text'};
  }

renderContent(){
    axios.get('http://digital8.devcap1.hclets.com/content/entities/usaaspace/usaaModel.caas.json').then(function (response) {
  console.log(response.data)
  }).catch(function (error) {
    /*this.setState({error});*/
    console.log(error);
  });
   return(<p className="App-intro">... Loading</p>)
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AEM React POC</h1>
        </header>
        {this.state.html};
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
