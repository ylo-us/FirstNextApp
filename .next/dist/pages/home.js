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

var _store = require('../component/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
	(0, _inherits3.default)(Home, _React$Component);

	function Home(props) {
		(0, _classCallCheck3.default)(this, Home);
		return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
	}

	(0, _createClass3.default)(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						{ className: 'text-center' },
						'Home'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'table',
						{ className: 'table table-hover' },
						_react2.default.createElement(
							'tbody',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Number: ',
									this.props.number
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'span',
										null,
										'Name: ',
										this.props.name
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement('img', { src: this.props.img, className: 'img-responsive center-block' })
					)
				)
			);
		}
	}]);
	return Home;
}(_react2.default.Component);

;

function mapStateToProps(store) {
	return {
		number: store.home.number,
		name: store.home.name,
		img: store.home.img
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwibnVtYmVyIiwibmFtZSIsImltZyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiaG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsSTs7O0FBQ0wsZUFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsMkhBQ1pBLEtBRFk7QUFFbEI7Ozs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNLO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxRQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUE7QUFBTCxLQURMO0FBRUs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQU8sV0FBVSxtQkFBakI7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFhLGNBQUtBLEtBQUwsQ0FBV0M7QUFBeEI7QUFBSixRQUREO0FBRUM7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBYSxlQUFLRCxLQUFMLENBQVdFO0FBQXhCO0FBQUo7QUFBSjtBQUZEO0FBREQsTUFEQTtBQU9EO0FBQUE7QUFBQTtBQUFLLDZDQUFLLEtBQUssS0FBS0YsS0FBTCxDQUFXRyxHQUFyQixFQUEwQixXQUFVLDZCQUFwQztBQUFMO0FBUEM7QUFGTCxJQUREO0FBY0E7OztFQXBCaUIsZ0JBQU1DLFM7O0FBcUJ4Qjs7QUFFRCxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUMvQixRQUFPO0FBQ05MLFVBQVFLLE1BQU1DLElBQU4sQ0FBV04sTUFEYjtBQUVOQyxRQUFNSSxNQUFNQyxJQUFOLENBQVdMLElBRlg7QUFHTkMsT0FBS0csTUFBTUMsSUFBTixDQUFXSjtBQUhWLEVBQVA7QUFLQTs7a0JBRWMseUJBQVFFLGVBQVIsRUFBeUJOLElBQXpCLEMiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWxvL0RvY3VtZW50cy9pbnRlcnZpZXdfY29kaW5ncy9ibGFja1RpZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnQvc3RvcmUnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgIDxkaXY+PGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SG9tZTwvaDI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICBcdDx0Ym9keT5cbiAgICAgICAgXHRcdDx0cj48dGQ+TnVtYmVyOiB7dGhpcy5wcm9wcy5udW1iZXJ9PC90ZD48L3RyPlxuXHQgICAgICAgIFx0PHRyPjx0ZD48c3Bhbj5OYW1lOiB7dGhpcy5wcm9wcy5uYW1lfTwvc3Bhbj48L3RkPjwvdHI+XG5cdCAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIFx0PGRpdj48aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd9IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIGNlbnRlci1ibG9ja1wiLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdG9yZSkge1xuXHRyZXR1cm4ge1xuXHRcdG51bWJlcjogc3RvcmUuaG9tZS5udW1iZXIsXG5cdFx0bmFtZTogc3RvcmUuaG9tZS5uYW1lLFxuXHRcdGltZzogc3RvcmUuaG9tZS5pbWdcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhvbWUpO1xuIl19