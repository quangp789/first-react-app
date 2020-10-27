import React from 'react';

// Sets up a class with a div that wraps your component
const withClass = (WrappedComponent, className) => {
	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};

export default withClass;