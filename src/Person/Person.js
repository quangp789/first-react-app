import React from 'react';
import './Person.css';

// Properties are the attributes you add in your components. EX <Person name="Quang" /> - Name is properties
const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
)};

export default person;
