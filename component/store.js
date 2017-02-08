import { combineReducers, createStore } from 'redux';
import Home from '../pages/home';

const routeInitState = {
	route: <Home />
}

const homeInitSate = {
	number: 0,
	name: 'not selected',
	img: ''
};

const routeReducer = (state=routeInitState, action) => {
	switch(action.type) {
		case 'ROUTE': {
			state = {...state, route: action.payload}
			break;
		}
	}
	// console.log('action state: ', state);
	return state;
}

const homeReducer = (state=homeInitSate, action) => {
	switch(action.type) {
		case 'UPDATE_NUMBER': {
			state = {...state, number: action.payload}
			break;
		}
		case 'UPDATE_NAME': {
			state = {...state, name: action.payload}
			break;
		}
		case 'UPDATE_IMG': {
			state = {...state, img: action.payload}
			break;
		}
	}
	return state;
}

const reducers = combineReducers({
	route: routeReducer,
	home: homeReducer
})

const store = createStore(reducers);

export default store;