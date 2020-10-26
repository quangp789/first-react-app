import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}
	
	state = {
		persons: [
			{id: 'uniqueID1', name: 'Max', age: 28 },
			{id: 'uniqueID2', name: 'Manu', age: 29 },
			{id: 'uniqueID3', name: 'Billy', age: 25 }
		],
		otherState: 'other value',
		showPersons: false
	}

static getDerivedStateFromProps(props, state) {
	console.log('[App.js] getDerivedStateFromProps', props);
	return state;
}
	
	// React Hook: You can reuse "useState" to effectively change your "persons" state w/o affecting your "other" state.
	//const [otherState, setOtherState] = useState('Some value');
	
	switchNameHandler = (newName) => {
	// This will not work: this.state.persons[0].name = 'Quang';
		this.setState( {
		  persons: [
			{ name: newName, age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Billy', age: 27 }
		  ]
		})
	}
	
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}
	
	nameChangedHandler = (event, id) => {
		// Obtain the position of the array
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id; 
		});
		// Store that position
		const person = {...this.state.persons[personIndex]};
		
		// Extract the "target" of the event (what we typed)
		person.name = event.target.value;
		
		// Update the position
		const persons  = [...this.state.persons];
		persons[personIndex] = person;
		
		// Set the state
		this.setState({persons: persons})
		
		}
	
	
	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice(); 
		const persons = [...this.state.persons]; // Create a copy of your persons array 
		persons.splice(personIndex, 1); // Remove one element from the array
		this.setState({persons: persons}); // Update your persons array
	}
	
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		// If doesShow is false, then it will set showPersons to true.
		this.setState({showPersons: !doesShow}); 
	}
	
  render () {
	console.log(['App.js render']);
	let persons = null;
	  
	if (this.state.showPersons) {
		persons = <Persons 
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />
			;	
	}
	
	 return (
     <div className={classes.App}>
		<Cockpit 
		   title={this.props.appTitle}
		   showPersons={this.state.showPersons}
		   persons={this.state.persons}  
		   clicked={this.togglePersonsHandler} />
		{persons}
	</div>
    );

	

	 // createElement method - Takes in at least 3 args (Component, props, ...children)
	 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
