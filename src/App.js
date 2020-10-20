import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer'
	};
	 
	let persons = null;
	  
	if (this.state.showPersons) {
		persons = (			
		// Map will take persons array [line 7] and render it to the screen
		<div>
			{this.state.persons.map((person, index) => {
			  // Return the person component
			  return <Person name={person.name} 
					  age={person.age}
					  click={() => this.deletePersonHandler(index)} 
	  				  key={person.id} 
	  				  changed={(event) => this.nameChangedHandler(event, person.id)}/>
			})}
		</div>
	  
		);
	}
	
	 return (
	  // Cannot use class but rather className. Which is a react attribute
     <div className="App">
		<h1>Hi, I am a react app!</h1>
		<p>This is really working :D.</p>
		 <button 
		 style={style}	 
		 onClick={this.togglePersonsHandler}>Switch Name</button>
		{persons}
	</div>

    );
	 // createElement method - Takes in at least 3 args (Component, props, ...children)
	 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
