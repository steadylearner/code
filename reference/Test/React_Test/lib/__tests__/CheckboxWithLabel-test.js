"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CheckboxWithLabel = _interopRequireDefault(require("../CheckboxWithLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// shallow for unit test and mount for integration test
// To test static html file use render method from enzyme
it('CheckboxWithLabel changes the text after click', function () {
  // Render a checkbox with label in the document
  var checkbox = (0, _enzyme.shallow)(_react.default.createElement(_CheckboxWithLabel.default, {
    labelOn: "On",
    labelOff: "Off"
  }));
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
}); // How to enable DOM features such as doucments and window? use jsdom?
// Mock functions with jest.fn(() => { // function here });
// Search it when you need it