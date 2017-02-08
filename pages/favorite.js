import React from 'react';
import { connect } from 'react-redux';
import store from '../component/store';

class Favorite extends React.Component {
	static getInitialProps() {
    return { state: store.getState() };
  }

	constructor(props) {
		super(props);
		this.store = store;
	}

	componentWillMount() {
		console.log('props from Favorite: ', this.props);
	}

	render() {
		return (
			<div>
        <h1>Favorite</h1>
        
      </div>
		)
	}
}

function mapStateToProps(store) {
	return {
		number: store.home.number,
		name: store.home.name,
		img: store.home.img
	}
}



export default connect(mapStateToProps)(Favorite)