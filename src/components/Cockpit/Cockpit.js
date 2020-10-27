import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
	useEffect (() => {
		console.log('[Cockpit.js] useEffect');
		// Http Request...
		const timer = setTimeout(() => {
			alert('Saved data to cloud');
		}, 1000);
		return () => {
			clearTimeout(timer);
			console.log('[Cockpit.js] cleanup work in useEffect');	
		};
	}, []); // You can pass an empty array here
	
	useEffect (() => {
		console.log('[Cockpit.js] 2nd userEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');	
		};
	});
	
	const assignedClasses = [];
	let btnClass = '';

	
	if (props.showPersons) {
		btnClass = classes.Red;
	}
	
	// If persons array is less than 2. CSS class is already created in app.css
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}
	
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working :D.</p>
			<button 
			className={btnClass} 
			onClick={props.clicked}>
			Toggle Person
			</button>
		</div>
	);
};

export default React.memo(cockpit);