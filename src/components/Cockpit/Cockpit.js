import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
	const assignedClasses = [];
	let btnClass = '';

	
	if (props.showPersons) {
		btnClass = classes.Red;
	}
	
	// If persons array is less than 2. CSS class is already created in app.css
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}
	
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working :D.</p>
			<button 
			className={btnClass} 
			alt={props.showPersons} 
			onClick={props.clicked}>
			Toggle Person
			</button>
		</div>
	);
};

export default cockpit;