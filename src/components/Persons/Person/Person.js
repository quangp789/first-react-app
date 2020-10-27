import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import withClass from '../../HOC/withClass';
import Auxiliary from '../../HOC/Auxiliary';
import AuthContext from '../../../context/auth-context'





class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}
	
	static contextType = AuthContext;
	
	componentDidMount() {
		//this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
	console.log('[Person.js] rendering...')
	return (
	<Auxiliary>
		{this.context.authenticated ? <p>Authenticated!</p> : <p> Please log in </p> }
			<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
			<p>{this.props.children}</p>
			<input
			//ref={(inputEl) => {this.inputElement = inputEl}}
			ref={this.inputElementRef}
			type="text" 
			onChange={this.props.changed} 
			value={this.props.name} />
	</Auxiliary>
		);
	}
}

// When you click, you expect a pointer at a function
Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};


export default withClass(Person, classes.Person);
