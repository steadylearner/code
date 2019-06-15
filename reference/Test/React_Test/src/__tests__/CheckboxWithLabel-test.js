import React from 'react';
import { shallow } from 'enzyme'; // shallow for unit test and mount for integration test

// To test static html file use render method from enzyme

import CheckboxWithLabel from '../CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});

// How to enable DOM features such as doucments and window? use jsdom?
// Mock functions with jest.fn(() => { // function here });
// Search it when you need it
