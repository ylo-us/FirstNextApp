'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App is a container that updates components (home, about, favorite)
var App = function (_React$Component) {
	(0, _inherits3.default)(App, _React$Component);

	function App(props) {
		(0, _classCallCheck3.default)(this, App);
		return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
	}

	(0, _createClass3.default)(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.props.route
			);
		}
	}]);
	return App;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(store) {
	return {
		route: store.route.route,
		name: store.home.name,
		number: store.home.number,
		img: store.home.img
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJyb3V0ZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwibmFtZSIsImhvbWUiLCJudW1iZXIiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBO0lBQ01BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUFBLHlIQUNaQSxLQURZO0FBRWxCOzs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDRSxTQUFLQSxLQUFMLENBQVdDO0FBRGIsSUFERDtBQUtBOzs7RUFYZ0IsZ0JBQU1DLFM7O0FBWXRCOztBQUVGLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU87QUFDTkgsU0FBT0csTUFBTUgsS0FBTixDQUFZQSxLQURiO0FBRU5JLFFBQU1ELE1BQU1FLElBQU4sQ0FBV0QsSUFGWDtBQUdORSxVQUFRSCxNQUFNRSxJQUFOLENBQVdDLE1BSGI7QUFJTkMsT0FBS0osTUFBTUUsSUFBTixDQUFXRTtBQUpWLEVBQVA7QUFNQSxDQVBEOztrQkFTZSx5QkFBUUwsZUFBUixFQUF5QkosR0FBekIsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lsby9Eb2N1bWVudHMvaW50ZXJ2aWV3X2NvZGluZ3MvYmxhY2tUaWVzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIEFwcCBpcyBhIGNvbnRhaW5lciB0aGF0IHVwZGF0ZXMgY29tcG9uZW50cyAoaG9tZSwgYWJvdXQsIGZhdm9yaXRlKVxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHt0aGlzLnByb3BzLnJvdXRlfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59IDtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cm91dGU6IHN0b3JlLnJvdXRlLnJvdXRlLFxuXHRcdG5hbWU6IHN0b3JlLmhvbWUubmFtZSxcblx0XHRudW1iZXI6IHN0b3JlLmhvbWUubnVtYmVyLFxuXHRcdGltZzogc3RvcmUuaG9tZS5pbWdcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XG4iXX0=