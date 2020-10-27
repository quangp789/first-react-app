import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);
	
	console.log(authContext.authenticated);
	
	useEffect (() => {
		console.log('[Cockpit.js] useEffect');
		// Http Request...
		//const timer = setTimeout(() => {
		//	alert('Saved data to cloud');
		//}, 1000);
		
		return () => {
			toggleBtnRef.current.click();
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
			ref={toggleBtnRef}
			className={btnClass} 
			onClick={props.clicked}>
			Toggle Person
			</button>
			<button onClick={authContext.login}>Log In</button> 

		</div>
	);
};

export default React.memo(cockpit);