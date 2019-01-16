import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Farmer from './Farmer/Farmer'

class App extends Component {
  state = {
    framers : [
      {name : 'Hello!!', age: 18},
      {name : 'How', age: 28},
      {name : 'Are', age: 38},
      {name : 'You', age: 48},
      {name : 'World', age: 58}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    // Not a valid menthod => this.state.framers[0].name = "Ashutosh";
    this.setState({
      framers : [
        {name : newName, age: 18},
        {name : 'How', age: 28},
        {name : 'Are', age: 38},
        {name : 'You', age: 48},
        {name : 'World', age: 68}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      framers : [
        {name : 'Ashu', age: 18},
        {name : 'gaurav', age: 28},
        {name : event.target.value, age: 38},
        {name : 'You', age: 48},
        {name : 'World', age: 68}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi This is first place to list the original food by framers</h1>
        <Farmer name={this.state.framers[0].name} age={this.state.framers[0].age}> My best crop is: Wheat</Farmer>
        <button onClick={this.switchNameHandler.bind(this, 'Ashutosh')}>Switch name</button>
        <Farmer name={this.state.framers[1].name} age={this.state.framers[1].age} />

        <Farmer 
        name={this.state.framers[2].name} 
        age={this.state.framers[2].age} 
        click={this.switchNameHandler.bind(this, 'Gaurav!')}
        change={this.nameChangeHandler} />

        <Farmer name={this.state.framers[3].name} age={this.state.framers[3].age} />
        <Farmer name={this.state.framers[4].name} age={this.state.framers[4].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hey this is my test app!!'), React.createElement(Farmer, null, null));
  }
}

export default App;
