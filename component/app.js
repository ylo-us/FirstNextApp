import React from 'react';
import { connect } from 'react-redux';

// App is a container that updates components (home, about, favorite)
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.route}
			</div>
		)
	}
} ;

const mapStateToProps = (store) => {
	return {
		route: store.route.route,
		name: store.home.name,
		number: store.home.number,
		img: store.home.img
	}
};

export default connect(mapStateToProps)(App);
