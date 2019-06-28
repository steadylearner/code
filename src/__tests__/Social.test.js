// refer this to test with Jest later
// Syntax is very similar

import React from 'react';
import { shallow } from 'enzyme';
import { Social } from "..";

describe('Test social that can be used with component MetaTags from react-meta-tags', () => {
  it("should work with custom prop. It doesn't need complicated test.", () => {
    const wrapper = shallow(<Social title="test" />);
    expect(wrapper.html())
    .toBe(`<title>test</title><meta name="description" content="Steadylearner Website"/><meta name="thumbnail" content="https://avatars0.githubusercontent.com/u/32325099?s=460&amp;v=4"/><meta property="og:title" content="test"/><meta property="og:description" content="Steadylearner Website"/><meta property="og:image" content="https://avatars0.githubusercontent.com/u/32325099?s=460&amp;v=4"/><meta property="og:locale" content="en_US"/><meta property="og:type" content="website"/><meta property="og:site_name" content="Steadylearner"/><meta property="og:url" content="https://steadylearner.com/"/><meta name="twitter:title" content="test"/><meta name="twitter:description" content="Steadylearner Website"/><meta name="twitter:image" content="https://avatars0.githubusercontent.com/u/32325099?s=460&amp;v=4"/><meta name="twitter:card" content="summary"/><meta name="twitter:site" content="www.steadylearner.com"/><meta name="twitter:creator" content="@steadylearner_p"/>`);
  });
});



