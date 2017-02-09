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
  }

  _goToHome() {
    this.store.dispatch(actions.routes(<Home />));
  }

  _goToAbout() {
    this.store.dispatch(actions.routes(<About />));
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
              <div className="sideNav list-group">
                <a href="#" className="list-group-item" onClick={this._goToHome.bind(this)}><span className="text-center">Home</span></a>
                <a href="#" className="list-group-item" onClick={this._goToAbout.bind(this)}><span className="text-center">About</span></a>
                <a href="#" className="list-group-item" onClick={this._goToFavorite.bind(this)}><span className="text-center">Favorite</span></a>
              </div>
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

