import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
// import Home from '../pages/home';
// import About from '../pages/about';
// import Favorite from '../pages/favorite';

import * as actions from '../component/actions';


class App extends React.Component {

	constructor(props) {
		super(props);
		console.log('from app: ', this.props);		
	}

	render() {
		return (
			<div>
				{this.props.route}
			</div>
		)
	}
} 

const mapStateToProps = (store) => {
	console.log('from app mapStateToProps: ', store);
	return {
		route: store.route.route,
		name: store.home.name,
		number: store.home.number,
		img: store.home.img
	}
}

export default connect(mapStateToProps)(App);


// <li><Link href="/" className="sideBar"><a>Home</a></Link></li>
// <li><Link href="/about" className="sideBar"><a>About</a></Link></li>
// <li><Link href="/favorite" className="sideBar"><a>Favorite</a></Link></li>