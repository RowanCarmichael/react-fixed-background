'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Background = require('./Background.css');

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Background = function Background(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bringToFront = _ref.bringToFront,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'bringToFront']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_Background2.default.backgroundOuter, bringToFront ? _Background2.default.foreground : null) },
    _react2.default.createElement(
      'div',
      _extends({ className: (0, _classnames2.default)(_Background2.default.backgroundInner, className) }, props),
      children
    )
  );
};

Background.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element, _propTypes2.default.node]).isRequired,
  className: _propTypes2.default.string,
  bringToFront: _propTypes2.default.bool
};

Background.defaultProps = {
  className: null,
  bringToFront: false
};

exports.default = Background;