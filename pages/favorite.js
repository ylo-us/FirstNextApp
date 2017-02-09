import React from 'react';
import { connect } from 'react-redux';
import data from '../misc/mockData';
import store from '../component/store';
import * as actions from '../component/actions';
import axios from 'axios';

class Favorite extends React.Component {
	// static getInitialProps() {
 //    return { state: store.getState() };
 //  }

	constructor(props) {
		super(props);
		this.store = store;
		this.data = data;
	}

	componentWillMount() {
		// console.log('props from Favorite: ', this.data);
	}

	_updateState(e) {
		console.log('this: ', e.target.value);
		let url = this.data[e.target.value - 1].imageUrl
		let config = {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'X-Requested-With': 'XMLHttpRequest'
				// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			}
		}
		axios.get(url, config)
				 .then((res) => {
				 		console.log('get pics: ', res.data);
				 })
		this.store.dispatch(actions.updateNum(e.target.value));
		this.store.dispatch(actions.updateName(this.data[e.target.value - 1].name));
		this.store.dispatch(actions.updateImg(this.data[e.target.value - 1].imageUrl));
	}

	render() {
		return (
			<div>
        <h1>Favorite</h1>
        <div>The favorite pokemon is: 
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

// {data.map((element) => {
//         			
//         		})}