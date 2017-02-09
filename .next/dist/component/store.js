'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _home = require('../pages/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeInitState = {
	route: _react2.default.createElement(_home2.default, null)
};

var homeInitSate = {
	number: 0,
	name: 'not selected',
	img: '/static/cropped-ball.png'
};

// reducer to update page
var routeReducer = function routeReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : routeInitState;
	var action = arguments[1];

	switch (action.type) {
		case 'ROUTE':
			{
				state = (0, _extends3.default)({}, state, { route: action.payload });
				break;
			}
	}
	return state;
};
// reducer to update pokemon data
var homeReducer = function homeReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : homeInitSate;
	var action = arguments[1];

	switch (action.type) {
		case 'UPDATE_NUMBER':
			{
				state = (0, _extends3.default)({}, state, { number: action.payload });
				break;
			}
		case 'UPDATE_NAME':
			{
				state = (0, _extends3.default)({}, state, { name: action.payload });
				break;
			}
		case 'UPDATE_IMG':
			{
				state = (0, _extends3.default)({}, state, { img: action.payload });
				break;
			}
	}
	return state;
};

var reducers = (0, _redux.combineReducers)({
	route: routeReducer,
	home: homeReducer
});

var store = (0, _redux.createStore)(reducers);

exports.default = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZUluaXRTdGF0ZSIsInJvdXRlIiwiaG9tZUluaXRTYXRlIiwibnVtYmVyIiwibmFtZSIsImltZyIsInJvdXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJob21lUmVkdWNlciIsInJlZHVjZXJzIiwiaG9tZSIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUI7QUFDdEJDLFFBQU87QUFEZSxDQUF2Qjs7QUFJQSxJQUFNQyxlQUFlO0FBQ3BCQyxTQUFRLENBRFk7QUFFcEJDLE9BQU0sY0FGYztBQUdwQkMsTUFBSztBQUhlLENBQXJCOztBQU1BO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLEdBQWtDO0FBQUEsS0FBakNDLEtBQWlDLHVFQUEzQlAsY0FBMkI7QUFBQSxLQUFYUSxNQUFXOztBQUN0RCxTQUFPQSxPQUFPQyxJQUFkO0FBQ0MsT0FBSyxPQUFMO0FBQWM7QUFDYkYsdUNBQVlBLEtBQVosSUFBbUJOLE9BQU9PLE9BQU9FLE9BQWpDO0FBQ0E7QUFDQTtBQUpGO0FBTUEsUUFBT0gsS0FBUDtBQUNBLENBUkQ7QUFTQTtBQUNBLElBQU1JLGNBQWMsU0FBZEEsV0FBYyxHQUFnQztBQUFBLEtBQS9CSixLQUErQix1RUFBekJMLFlBQXlCO0FBQUEsS0FBWE0sTUFBVzs7QUFDbkQsU0FBT0EsT0FBT0MsSUFBZDtBQUNDLE9BQUssZUFBTDtBQUFzQjtBQUNyQkYsdUNBQVlBLEtBQVosSUFBbUJKLFFBQVFLLE9BQU9FLE9BQWxDO0FBQ0E7QUFDQTtBQUNELE9BQUssYUFBTDtBQUFvQjtBQUNuQkgsdUNBQVlBLEtBQVosSUFBbUJILE1BQU1JLE9BQU9FLE9BQWhDO0FBQ0E7QUFDQTtBQUNELE9BQUssWUFBTDtBQUFtQjtBQUNsQkgsdUNBQVlBLEtBQVosSUFBbUJGLEtBQUtHLE9BQU9FLE9BQS9CO0FBQ0E7QUFDQTtBQVpGO0FBY0EsUUFBT0gsS0FBUDtBQUNBLENBaEJEOztBQWtCQSxJQUFNSyxXQUFXLDRCQUFnQjtBQUNoQ1gsUUFBT0ssWUFEeUI7QUFFaENPLE9BQU1GO0FBRjBCLENBQWhCLENBQWpCOztBQUtBLElBQU1HLFFBQVEsd0JBQVlGLFFBQVosQ0FBZDs7a0JBRWVFLEsiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lsby9Eb2N1bWVudHMvaW50ZXJ2aWV3X2NvZGluZ3MvYmxhY2tUaWVzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuXG5jb25zdCByb3V0ZUluaXRTdGF0ZSA9IHtcblx0cm91dGU6IDxIb21lIC8+XG59O1xuXG5jb25zdCBob21lSW5pdFNhdGUgPSB7XG5cdG51bWJlcjogMCxcblx0bmFtZTogJ25vdCBzZWxlY3RlZCcsXG5cdGltZzogJy9zdGF0aWMvY3JvcHBlZC1iYWxsLnBuZydcbn07XG5cbi8vIHJlZHVjZXIgdG8gdXBkYXRlIHBhZ2VcbmNvbnN0IHJvdXRlUmVkdWNlciA9IChzdGF0ZT1yb3V0ZUluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1JPVVRFJzoge1xuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHJvdXRlOiBhY3Rpb24ucGF5bG9hZH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuLy8gcmVkdWNlciB0byB1cGRhdGUgcG9rZW1vbiBkYXRhXG5jb25zdCBob21lUmVkdWNlciA9IChzdGF0ZT1ob21lSW5pdFNhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdVUERBVEVfTlVNQkVSJzoge1xuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIG51bWJlcjogYWN0aW9uLnBheWxvYWR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSAnVVBEQVRFX05BTUUnOiB7XG5cdFx0XHRzdGF0ZSA9IHsuLi5zdGF0ZSwgbmFtZTogYWN0aW9uLnBheWxvYWR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSAnVVBEQVRFX0lNRyc6IHtcblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCBpbWc6IGFjdGlvbi5wYXlsb2FkfVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcblx0cm91dGU6IHJvdXRlUmVkdWNlcixcblx0aG9tZTogaG9tZVJlZHVjZXJcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il19