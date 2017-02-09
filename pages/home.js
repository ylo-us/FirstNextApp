import React from 'react';
import { connect } from 'react-redux';
import store from '../component/store';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
        <div><h2 className="text-center">Home</h2></div>
        <div>
        <table className="table table-hover">
        	<tbody>
        		<tr><td>Number: {this.props.number}</td></tr>
	        	<tr><td><span>Name: {this.props.name}</span></td></tr>
	        </tbody>
        </table>
      	<div><img src={this.props.img} className="img-responsive center-block"/></div>
        </div>
      </div>
		)
	}
};

function mapStateToProps(store) {
	return {
		number: store.home.number,
		name: store.home.name,
		img: store.home.img
	}
};

export default connect(mapStateToProps)(Home);
