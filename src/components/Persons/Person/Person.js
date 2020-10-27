import React, {Component, Fragment} from 'react';
import classes from './Person.css';
//import Auxiliary from '../../HOC/Auxiliary';

class Person extends Component {
	//static getDerivedStateFromProps(props, state) {
		//console.log('[Persons.js] getDerivedStateFromProps');
		//return state;
	//}
	
	componentWillReceiveProps(props) {
		console.log('[Persons.js] componentWillReceiveProps', props);
	}

	render() {
	console.log('[Person.js] rendering...')
	return (
	<Fragment>
			<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
			<p>{this.props.children}</p>
			<input type="text" onChange={this.props.changed} value={this.props.name} />
	</Fragment>
		);
	}
}


export default Person;
