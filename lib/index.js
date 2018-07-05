'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaskerContainer = function (_Component) {
    _inherits(MaskerContainer, _Component);

    function MaskerContainer(props) {
        _classCallCheck(this, MaskerContainer);

        return _possibleConstructorReturn(this, (MaskerContainer.__proto__ || Object.getPrototypeOf(MaskerContainer)).call(this, props));
    }

    _createClass(MaskerContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$show = _props.show,
                show = _props$show === undefined ? false : _props$show,
                _props$bgClick = _props.bgClick,
                bgClick = _props$bgClick === undefined ? function () {} : _props$bgClick,
                _props$bgStyle = _props.bgStyle,
                bgStyle = _props$bgStyle === undefined ? {} : _props$bgStyle;

            return _react2.default.createElement(
                'div',
                { className: 'mask-container', style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement('div', { className: 'mask-bg', style: bgStyle, onClick: function onClick() {
                        return bgClick();
                    } }),
                this.props.children
            );
        }
    }]);

    return MaskerContainer;
}(_react.Component);

exports.default = MaskerContainer;