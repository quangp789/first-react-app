import React, {PureComponent} from 'react';
import Person from './Person/Person';

// Props contain an array of persons
class Persons extends PureComponent {
//	shouldComponentUpdate(nextProps, nextState) {
//		console.log('[Persons.js] shouldComponentUpdate');
//		if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
//			return true;
//		} else {
//			return false;
//		}
//	}
	
	getSnapshotBeforeUpdate(pervProps, pervState) {
		console.log('[Person.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot!'};
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] compoentDidUpdate');
		console.log(snapshot);
	}
	
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}
		
	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return (	
			<Person 
			 name={person.name} 
			 age={person.age}
			 key={person.id}
			 click={() => this.props.clicked(index)} 
	  		 changed={(event) => this.props.changed(event, person.id)} /> 
			);
		});
	}
};

export default Persons;