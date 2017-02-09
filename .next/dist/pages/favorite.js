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

var _mockData = require('../misc/mockData');

var _mockData2 = _interopRequireDefault(_mockData);

var _store = require('../component/store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('../component/actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Favorite = function (_React$Component) {
	(0, _inherits3.default)(Favorite, _React$Component);

	function Favorite(props) {
		(0, _classCallCheck3.default)(this, Favorite);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Favorite.__proto__ || (0, _getPrototypeOf2.default)(Favorite)).call(this, props));

		_this.store = _store2.default;
		_this.data = [{}].concat(_mockData2.default);
		return _this;
	}

	(0, _createClass3.default)(Favorite, [{
		key: '_updateState',
		value: function _updateState(e) {
			// console.log('this: ', e.target.value);
			var imgUrl = '/static/' + e.target.value + '.png';
			this.store.dispatch(actions.updateNum(e.target.value));
			this.store.dispatch(actions.updateName(this.data[e.target.value].name));
			this.store.dispatch(actions.updateImg(imgUrl));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'text-center' },
				_react2.default.createElement(
					'h2',
					null,
					'Favorite'
				),
				_react2.default.createElement(
					'div',
					null,
					'The favorite pokemon is:',
					_react2.default.createElement(
						'select',
						{ onChange: this._updateState.bind(this) },
						this.data.map(function (element) {
							return _react2.default.createElement(
								'option',
								{ value: element.number },
								element.name
							);
						})
					)
				)
			);
		}
	}]);
	return Favorite;
}(_react2.default.Component);

;

function mapStateToProps(store) {
	return {
		number: store.home.number,
		name: store.home.name,
		img: store.home.img
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Favorite);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Zhdm9yaXRlLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJGYXZvcml0ZSIsInByb3BzIiwic3RvcmUiLCJkYXRhIiwiY29uY2F0IiwiZSIsImltZ1VybCIsInRhcmdldCIsInZhbHVlIiwiZGlzcGF0Y2giLCJ1cGRhdGVOdW0iLCJ1cGRhdGVOYW1lIiwibmFtZSIsInVwZGF0ZUltZyIsIl91cGRhdGVTdGF0ZSIsImJpbmQiLCJtYXAiLCJlbGVtZW50IiwibnVtYmVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiaG9tZSIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsTzs7Ozs7O0lBRU5DLFE7OztBQUNMLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0lBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUw7QUFDQSxRQUFLQyxJQUFMLEdBQVksQ0FBQyxFQUFELEVBQUtDLE1BQUwsb0JBQVo7QUFIa0I7QUFJbEI7Ozs7K0JBRVlDLEMsRUFBRztBQUNmO0FBQ0EsT0FBSUMsU0FBUyxhQUFhRCxFQUFFRSxNQUFGLENBQVNDLEtBQXRCLEdBQTZCLE1BQTFDO0FBQ0EsUUFBS04sS0FBTCxDQUFXTyxRQUFYLENBQW9CVixRQUFRVyxTQUFSLENBQWtCTCxFQUFFRSxNQUFGLENBQVNDLEtBQTNCLENBQXBCO0FBQ0EsUUFBS04sS0FBTCxDQUFXTyxRQUFYLENBQW9CVixRQUFRWSxVQUFSLENBQW1CLEtBQUtSLElBQUwsQ0FBVUUsRUFBRUUsTUFBRixDQUFTQyxLQUFuQixFQUEwQkksSUFBN0MsQ0FBcEI7QUFDQSxRQUFLVixLQUFMLENBQVdPLFFBQVgsQ0FBb0JWLFFBQVFjLFNBQVIsQ0FBa0JQLE1BQWxCLENBQXBCO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxhQUFmO0FBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURMO0FBRUs7QUFBQTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsUUFBUSxVQUFVLEtBQUtRLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWxCO0FBQ0UsV0FBS1osSUFBTCxDQUFVYSxHQUFWLENBQWMsVUFBQ0MsT0FBRCxFQUFhO0FBQy9CLGNBQU87QUFBQTtBQUFBLFVBQVEsT0FBT0EsUUFBUUMsTUFBdkI7QUFBZ0NELGdCQUFRTDtBQUF4QyxRQUFQO0FBQ0EsT0FGSTtBQURGO0FBREQ7QUFGTCxJQUREO0FBWUE7OztFQTVCcUIsZ0JBQU1PLFM7O0FBNkI1Qjs7QUFFRCxTQUFTQyxlQUFULENBQXlCbEIsS0FBekIsRUFBZ0M7QUFDL0IsUUFBTztBQUNOZ0IsVUFBUWhCLE1BQU1tQixJQUFOLENBQVdILE1BRGI7QUFFTk4sUUFBTVYsTUFBTW1CLElBQU4sQ0FBV1QsSUFGWDtBQUdOVSxPQUFLcEIsTUFBTW1CLElBQU4sQ0FBV0M7QUFIVixFQUFQO0FBS0E7O2tCQUVjLHlCQUFRRixlQUFSLEVBQXlCcEIsUUFBekIsQyIsImZpbGUiOiJmYXZvcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWxvL0RvY3VtZW50cy9pbnRlcnZpZXdfY29kaW5ncy9ibGFja1RpZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL21pc2MvbW9ja0RhdGEnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbXBvbmVudC9zdG9yZSc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudC9hY3Rpb25zJztcblxuY2xhc3MgRmF2b3JpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0b3JlID0gc3RvcmU7XG5cdFx0dGhpcy5kYXRhID0gW3t9XS5jb25jYXQoZGF0YSk7XG5cdH1cblxuXHRfdXBkYXRlU3RhdGUoZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzOiAnLCBlLnRhcmdldC52YWx1ZSk7XG5cdFx0bGV0IGltZ1VybCA9ICcvc3RhdGljLycgKyBlLnRhcmdldC52YWx1ZSArJy5wbmcnO1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVOdW0oZS50YXJnZXQudmFsdWUpKTtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlTmFtZSh0aGlzLmRhdGFbZS50YXJnZXQudmFsdWVdLm5hbWUpKTtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlSW1nKGltZ1VybCkpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMj5GYXZvcml0ZTwvaDI+XG4gICAgICAgIDxkaXY+VGhlIGZhdm9yaXRlIHBva2Vtb24gaXM6IFxuICAgICAgICBcdDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuX3VwZGF0ZVN0YXRlLmJpbmQodGhpcyl9PlxuICAgICAgICBcdFx0e3RoaXMuZGF0YS5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxvcHRpb24gdmFsdWU9e2VsZW1lbnQubnVtYmVyfT57ZWxlbWVudC5uYW1lfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0fSl9XG4gICAgICAgIFx0PC9zZWxlY3Q+ICAgICAgICBcdFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXHRcdClcblx0fVxufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0b3JlKSB7XG5cdHJldHVybiB7XG5cdFx0bnVtYmVyOiBzdG9yZS5ob21lLm51bWJlcixcblx0XHRuYW1lOiBzdG9yZS5ob21lLm5hbWUsXG5cdFx0aW1nOiBzdG9yZS5ob21lLmltZ1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRmF2b3JpdGUpO1xuXG4iXX0=