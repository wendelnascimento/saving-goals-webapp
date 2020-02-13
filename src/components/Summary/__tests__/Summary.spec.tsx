import React from 'react';
import { shallow, mount } from 'enzyme';
import dayjs from 'dayjs';

import Summary from '../Summary';

import { SummaryValue } from '../styles';

describe('<Summary />', () => {
  const props = {
    monthlyValue: '$521',
    monthsDiff: 2,
    value: '25000',
    selectedDate: dayjs(new Date(0, 0, 0, 0, 0, 0, 0)),
  };

  it('Should render', () => {
    shallow(<Summary {...props} />);
  });

  it('Should math stored snapshot', () => {
    const wrapper = mount(<Summary {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should have correct monthly value being displayed', () => {
    const wrapper = mount(<Summary {...props} />);

    expect(wrapper.find(SummaryValue).text()).toEqual('$521');
  });
});
