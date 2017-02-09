import React from 'react';
import { connect } from 'react-redux';
import data from '../misc/mockData';
import store from '../component/store';
import * as actions from '../component/actions';

class Favorite extends React.Component {
	// static getInitialProps() {
 //    return { state: store.getState() };
 //  }

	constructor(props) {
		super(props);
		this.store = store;
		this.data = [{}].concat(data);
	}

	componentWillMount() {
		// console.log('props from Favorite: ', this.data);
	}

	_updateState(e) {
		console.log('this: ', e.target.value);
		let imgUrl = '/static/' + e.target.value +'.png';
		this.store.dispatch(actions.updateNum(e.target.value));
		this.store.dispatch(actions.updateName(this.data[e.target.value].name));
		this.store.dispatch(actions.updateImg(imgUrl));
	}

	render() {
		return (
			<div>
        <h1>Favorite</h1>
        <div className="container">The favorite pokemon is: 
        	<select onChange={this._updateState.bind(this)}>
        		{this.data.map((element) => {
							return <option value={element.number}>{element.name}</option>
						})}
        	</select>        	
        </div>
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


