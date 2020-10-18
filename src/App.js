import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Billy', age: 25 }
		]
	}

	switchNameHandler = () => {
		// console.log('Was Clicked!');
		// This will not work: this.state.persons[0].name = 'Quang';
		this.setState({persons: [
			{ name: 'Quang', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Billy', age: 27 }
			]
		})
	}

	render() {
	 return (
	  // Cannot use class but rather className. Which is a react attribute
      <div className="App">
		<h1>Hi, I am a react app!</h1>
		<p>This is really working :D.</p>
		 <button onClick={this.switchNameHandler}>Switch Name</button>
		<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
		<Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
		<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>

    );
	 // createElement method - Takes in at least 3 args (Component, props, ...children)
	 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
