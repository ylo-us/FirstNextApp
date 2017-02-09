'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _head = require('/Users/ylo/Documents/interview_codings/blackTies/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _store = require('../component/store');

var _store2 = _interopRequireDefault(_store);

var _app = require('../component/app');

var _app2 = _interopRequireDefault(_app);

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

var _favorite = require('./favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _actions = require('../component/actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);
  (0, _createClass3.default)(Main, null, [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { state: _store2.default.getState() };
    }
  }]);

  function Main(props) {
    (0, _classCallCheck3.default)(this, Main);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

    _this.store = _store2.default;
    return _this;
  }

  (0, _createClass3.default)(Main, [{
    key: '_goToHome',
    value: function _goToHome() {
      this.store.dispatch(actions.routes(_react2.default.createElement(_home2.default, null)));
    }
  }, {
    key: '_goToAbout',
    value: function _goToAbout() {
      this.store.dispatch(actions.routes(_react2.default.createElement(_about2.default, null)));
    }
  }, {
    key: '_goToFavorite',
    value: function _goToFavorite() {
      this.store.dispatch(actions.routes(_react2.default.createElement(_favorite2.default, null)));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Demo Site'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container row' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid col-sm-3' },
            _react2.default.createElement(
              'div',
              { id: 'logo' },
              _react2.default.createElement('img', { src: '/static/Pokemon-GO-Tech2-720-624x351.jpg', width: '300' })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'sideNav list-group' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'list-group-item', onClick: this._goToHome.bind(this) },
                  _react2.default.createElement(
                    'span',
                    { className: 'text-center' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'list-group-item', onClick: this._goToAbout.bind(this) },
                  _react2.default.createElement(
                    'span',
                    { className: 'text-center' },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'list-group-item', onClick: this._goToFavorite.bind(this) },
                  _react2.default.createElement(
                    'span',
                    { className: 'text-center' },
                    'Favorite'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'container container-fluid col-sm-9' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'page-header' },
                _react2.default.createElement(
                  'h1',
                  { className: 'text-center' },
                  'DEMO'
                )
              ),
              _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store },
                _react2.default.createElement(_app2.default, null)
              )
            )
          )
        )
      );
    }
  }]);
  return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJNYWluIiwic3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsInJvdXRlcyIsIl9nb1RvSG9tZSIsImJpbmQiLCJfZ29Ub0Fib3V0IiwiX2dvVG9GYXZvcml0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxPOzs7Ozs7SUFFU0MsSTs7OztzQ0FDTTtBQUN2QixhQUFPLEVBQUVDLE9BQU8sZ0JBQU1DLFFBQU4sRUFBVCxFQUFQO0FBQ0Q7OztBQUVELGdCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsa0lBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUw7QUFGa0I7QUFHbkI7Ozs7Z0NBRVc7QUFDVixXQUFLQSxLQUFMLENBQVdDLFFBQVgsQ0FBb0JOLFFBQVFPLE1BQVIsQ0FBZSxtREFBZixDQUFwQjtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0JOLFFBQVFPLE1BQVIsQ0FBZSxvREFBZixDQUFwQjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0JOLFFBQVFPLE1BQVIsQ0FBZSx1REFBZixDQUFwQjtBQUNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLGtEQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUZGO0FBR0Usa0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssdUVBQTVCO0FBSEYsU0FERjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssSUFBRyxNQUFSO0FBQ0UscURBQUssS0FBSSwwQ0FBVCxFQUFvRCxPQUFNLEtBQTFEO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFHLE1BQUssR0FBUixFQUFZLFdBQVUsaUJBQXRCLEVBQXdDLFNBQVMsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWpEO0FBQTRFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCO0FBQUE7QUFBQTtBQUE1RSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBRyxNQUFLLEdBQVIsRUFBWSxXQUFVLGlCQUF0QixFQUF3QyxTQUFTLEtBQUtDLFVBQUwsQ0FBZ0JELElBQWhCLENBQXFCLElBQXJCLENBQWpEO0FBQTZFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCO0FBQUE7QUFBQTtBQUE3RSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBRyxNQUFLLEdBQVIsRUFBWSxXQUFVLGlCQUF0QixFQUF3QyxTQUFTLEtBQUtFLGFBQUwsQ0FBbUJGLElBQW5CLENBQXdCLElBQXhCLENBQWpEO0FBQWdGO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCO0FBQUE7QUFBQTtBQUFoRjtBQUhGO0FBREY7QUFKRixXQURGO0FBYUU7QUFBQTtBQUFBLGNBQUssV0FBVSxvQ0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGFBQWY7QUFBNkI7QUFBQTtBQUFBLG9CQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUE7QUFBN0IsZUFERjtBQUVJO0FBQUE7QUFBQSxrQkFBVSxPQUFPLEtBQUtKLEtBQXRCO0FBQ0U7QUFERjtBQUZKO0FBREY7QUFiRjtBQU5GLE9BREY7QUErQkQ7OztFQXREK0IsZ0JBQU1PLFM7O2tCQUFuQlgsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWxvL0RvY3VtZW50cy9pbnRlcnZpZXdfY29kaW5ncy9ibGFja1RpZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbXBvbmVudC9zdG9yZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudC9hcHAnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IEZhdm9yaXRlIGZyb20gJy4vZmF2b3JpdGUnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50L2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICByZXR1cm4geyBzdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTsgXG4gIH1cblxuICBfZ29Ub0hvbWUoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJvdXRlcyg8SG9tZSAvPikpO1xuICB9XG5cbiAgX2dvVG9BYm91dCgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMucm91dGVzKDxBYm91dCAvPikpO1xuICB9XG5cbiAgX2dvVG9GYXZvcml0ZSgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMucm91dGVzKDxGYXZvcml0ZSAvPikpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRlbW8gU2l0ZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL1Bva2Vtb24tR08tVGVjaDItNzIwLTYyNHgzNTEuanBnXCIgd2lkdGg9XCIzMDBcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlTmF2IGxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIG9uQ2xpY2s9e3RoaXMuX2dvVG9Ib21lLmJpbmQodGhpcyl9PjxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SG9tZTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLl9nb1RvQWJvdXQuYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BYm91dDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLl9nb1RvRmF2b3JpdGUuYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5GYXZvcml0ZTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLWZsdWlkIGNvbC1zbS05XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+PGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+REVNTzwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==