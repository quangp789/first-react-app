import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
	// useState - Always returns an array with 2 elements and ONLY 2. 
	// We use the first arg to render, and the second to make changes
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Billy', age: 25 }
		],
	});
	
	// React Hook: You can reuse "useState" to effectively change your "persons" state w/o affecting your "other" state. 
	const [otherState, setOtherState] = useState('Some value');
	
	const switchNameHandler = (newName) => {
	// This will not work: this.state.persons[0].name = 'Quang';
		setPersonsState({
		  persons: [
			{ name: newName, age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Billy', age: 27 }
		  ]
		})
	};
	
	// We extract the "target" of the event (what we typed) and get the value to change the name 
	const nameChangedHandler = (event) => {
		setPersonsState({
		  persons: [
			{ name: 'Quang', age: 28 },
			{ name: event.target.value, age: 29 },
			{ name: 'Billy', age: 27 }
		  ]
		})
	};
	
	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer'
	};
	
	 return (
	  // Cannot use class but rather className. Which is a react attribute
      <div className="App">
		<h1>Hi, I am a react app!</h1>
		<p>This is really working :D.</p>
		 <button 
		 style={style}	 
		 onClick={() => switchNameHandler('Quang Phong!')}>Switch Name</button>
		
		<Person 
		name={personsState.persons[0].name} 
		age={personsState.persons[0].age} />
		
		<Person 
		name={personsState.persons[1].name} 
		age={personsState.persons[1].age} 
		click={switchNameHandler.bind(this, 'Mary')} 
		// nameChangeHandler used here
		changed={nameChangedHandler}>My Hobbies: Racing</Person>
		
		<Person 
		name={personsState.persons[2].name} 
		age={personsState.persons[2].age} />
      </div>

    );
	 // createElement method - Takes in at least 3 args (Component, props, ...children)
	 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;
