import React from 'react';
import { shallow, mount } from 'enzyme';

import Logo from '../Logo';

describe('<Logo />', () => {
  it('Should render', () => {
    shallow(<Logo />);
  });

  it('Should math stored snapshot', () => {
    const wrapper = mount(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
