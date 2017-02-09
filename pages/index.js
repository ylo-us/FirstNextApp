import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../component/store';
import App from '../component/app';
import About from './about';
import Favorite from './favorite';
import Home from './home';
import * as actions from '../component/actions';

export default class Main extends React.Component {
  static getInitialProps() {
    return { state: store.getState() };
  }

  constructor (props) {
    super(props);
    this.store = store;
    console.log('index store: ', this.store);
    console.log('this.props: ', this.props);
    console.log('this.route: ', this.route);
    
  }

  componentDidMount () {
    // this.store.dispatch(actions.routes('Home'));
  }

  _goToHome() {
    // console.log('before dispatch: ', this.store.states.route)
    this.store.dispatch(actions.routes(<Home />));
    // console.log('after dispatch: ', this.store.states.route);
    console.log('clicked home');
    // this.props.state.route.route = <Home />;
  }

  _goToAbout() {
    // console.log('before dispatch: ', this.store.states.route)
    this.store.dispatch(actions.routes(<About />));
    // console.log('after dispatch: ', this.store.states.route);
    console.log('clicked about');
    // this.props.state.route.route = <About />;
  }

  _goToFavorite() {
    this.store.dispatch(actions.routes(<Favorite />));
    
  }

  render () {
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
                  <App />
                </Provider>             
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// <App route={this.props.state.route.route}/>

