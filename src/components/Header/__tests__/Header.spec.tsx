import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  it('Should render', () => {
    shallow(<Header />);
  });

  it('Should math stored snapshot', () => {
    const wrapper = mount(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
