import React, {Component} from 'react';
import classes from './Person.css'

class Person extends Component {
	//static getDerivedStateFromProps(props, state) {
		//console.log('[Persons.js] getDerivedStateFromProps');
		//return state;
	//}
	
	componentWillReceiveProps(props) {
		console.log('[Persons.js] componentWillReceiveProps', props);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}
	
	getSnapshotBeforeUpdate(pervProps, pervState) {
		console.log('[Person.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot!'};
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] compoentDidUpdate');
		console.log(snapshot);
	}
	
	render() {
	console.log('[Person.js] rendering...')
	return (
		<div className={classes.Person}>
			<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
			<p>{this.props.children}</p>
			<input type="text" onChange={this.props.changed} value={this.props.name} />
		</div>
		);
	}
}


export default Person;
