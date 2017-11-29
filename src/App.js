import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js'
import Good_robot from './components/good_robot.js'
import Bad_robot from './components/saved_code.js'
import Kanyebot_5000 from './components/kanyebot_5000.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: 'Hi'
    }
  }

  SaySomething(input){
    this.setState({input: input})
  }

  render() {
    return (
      <div className="App">
        <Form input={this.state.input} SaySomething={this.SaySomething.bind(this)} />
        <Good_robot input={this.state.input} />
        <Bad_robot input={this.state.input} />
        <Kanyebot_5000 input={this.state.input}/>
      </div>
    );
  }
}

export default App;
