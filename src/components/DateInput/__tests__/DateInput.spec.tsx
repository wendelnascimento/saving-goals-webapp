import React from 'react';
import { shallow, mount } from 'enzyme';
import dayjs from 'dayjs';

import DateInput from '../DateInput';
import { Month, Year, AddonLeft, AddonRight } from '../styles';

describe('<DateInput />', () => {
  const props = {
    nextMonth: jest.fn(),
    previousMonth: jest.fn(),
    value: dayjs(),
  };

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('Should render', () => {
    shallow(
      <DateInput
        nextMonth={props.nextMonth}
        previousMonth={props.previousMonth}
        value={props.value}
      />,
    );
  });

  it('Should have correct value being displayed', () => {
    const wrapper = mount(
      <DateInput
        nextMonth={props.nextMonth}
        previousMonth={props.previousMonth}
        value={props.value}
      />,
    );

    expect(wrapper.find(Month).text()).toEqual(dayjs().format('MMMM'));
    expect(wrapper.find(Year).text()).toEqual(dayjs().format('YYYY'));
  });

  it('Should call nextMonth and previousMonth functions on click', () => {
    const wrapper = mount(
      <DateInput
        nextMonth={props.nextMonth}
        previousMonth={props.previousMonth}
        value={props.value}
      />,
    );

    wrapper.find(AddonLeft).simulate('click');
    expect(props.previousMonth).toHaveBeenCalledTimes(1);
    expect(props.nextMonth).not.toHaveBeenCalled();

    wrapper.find(AddonRight).simulate('click');
    expect(props.nextMonth).toHaveBeenCalledTimes(1);
    expect(props.previousMonth).toHaveBeenCalledTimes(1);
  });
});
