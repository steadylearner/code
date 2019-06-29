import React from 'react';
// shallow for unit test and mount for integration test
// To test static html file use render method from enzyme
import { shallow } from 'enzyme';

import CheckboxWithLabel from '../React/CheckBoxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
