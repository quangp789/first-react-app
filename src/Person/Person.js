import React from 'react';

// Properties are the attributes you add in your components. EX <Person name="Quang" /> - Name is properties
const person = (props) => {
	return (
		<div>
			<p>I'm {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
		</div>
)};

export default person;
