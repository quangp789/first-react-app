import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
		persons: [
			{id: 'uniqueID1', name: 'Max', age: 28 },
			{id: 'uniqueID2', name: 'Manu', age: 29 },
			{id: 'uniqueID3', name: 'Billy', age: 25 }
		],
		otherState: 'other value',
		showPersons: false
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
	let persons = null;
	let btnClass = [classes.Button] // This will point to App.css module 
	  
	if (this.state.showPersons) {
		persons = (			
		// Map will take persons array [line 7] and render it to the screen as a new array
		<div>
			{this.state.persons.map((person, index) => {
			  // Return the person component
			  return <ErrorBoundary key={person.id}>
			 		 <Person name={person.name} 
					  age={person.age}
					  click={() => this.deletePersonHandler(index)} 
	  				  changed={(event) => this.nameChangedHandler(event, person.id)}/> 
					 </ ErrorBoundary>
			})}
		</div>
	  
		);
		btnClass = classes.Red;
	}
	
	const assignedClasses = [];
	// If persons array is less than 2. CSS class is already created in app.css
	if (this.state.persons.length <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (this.state.persons.length <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}
	
	 return (
     <div className={classes.App}>
		<h1>Hi, I am a react app!</h1>
		<p className={assignedClasses.join(' ')}>This is really working :D.</p>
		<button className={btnClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
		Toggle Person
		</button>
		{persons}
	</div>
    );

	

	 // createElement method - Takes in at least 3 args (Component, props, ...children)
	 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
