import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import data from '../misc/mockData';
import { Provider } from 'react-redux';
import About from './about';
import Favorite from './favorite';
import Home from './home';
import * as actions from '../component/actions';
import store from '../component/states';

export default class Main extends React.Component {
	static getInitialProps () {
		return {data: data, store: store.getState()}
	}

	constructor(props) {
		super(props);
		// console.log(this.props);
		this.store = store;
		this.store.states = this.props.store;
		// console.log('store: ', this.store.states);
	}

	componentDidMount() {
		this.store.dispatch(actions.routes(Home))
		console.log('did mount: ', this.store);
	}

	_goToHome() {
		console.log('before dispatch: ', this.store.states.route)
		this.store.dispatch(actions.routes(Home))
		console.log('after dispatch: ', this.store.states.route);
	}

	_goToAbout() {
		this.store.dispatch(actions.routes(About))
	}

	_goToFavorite() {
		this.store.dispatch(actions.routes(Favorite))
	}

	render() {
		return (
			<div>
				<Head>
		      <title>Demo Site</title>
		      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
		    </Head>
		    <div className="main container-fluid">
					<div className="pull-left">
						<div id="logo">
							<img src="/static/Pokemon-GO-Tech2-720-624x351.jpg" width="300"></img>
						</div>
						<div>
							<ul className="sideNav">
								<li><span onClick={this._goToHome.bind(this)}>Home</span></li>
								<li><span onClick={this._goToAbout.bind(this)}>About</span></li>
								<li><span onClick={this._goToFavorite.bind(this)}>Favorite</span></li>
							</ul>
						</div>
					</div>
					<div id="content" className="">
						<div>
							<h1 className="text-center">DEMO</h1>
							<Provider store={this.store}>
								<Home />
							</Provider>
						</div>
					</div>
				</div>
			</div>
		)
	}
} 

// const mapStateToProps = (store) => {
// 	console.log(store);
// 	return {
// 		route: store.route.page
// 	}
// }

// export default connect(mapStateToProps)(Main);


// <li><Link href="/" className="sideBar"><a>Home</a></Link></li>
// <li><Link href="/about" className="sideBar"><a>About</a></Link></li>
// <li><Link href="/favorite" className="sideBar"><a>Favorite</a></Link></li>