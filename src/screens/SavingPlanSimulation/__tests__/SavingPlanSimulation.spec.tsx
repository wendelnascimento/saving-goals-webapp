import React from 'react';
import { shallow, mount } from 'enzyme';
import dayjs from 'dayjs';

import SavingPlanSimulation from '../SavingPlanSimulation';
import { SummaryValue } from '../../../components/Summary/styles';
import {
  AddonLeft,
  AddonRight,
  Month,
  Year,
} from '../../../components/DateInput/styles';

describe('<SavingPlanSimulation />', () => {
  it('Should render', () => {
    shallow(<SavingPlanSimulation />);
  });

  it('Should not let you type an string on value input', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper
      .find('Input input')
      .simulate('change', { target: { value: 'test' } });

    expect(wrapper.find('Input').prop('value')).toBe('');
  });

  it('Should correctly format (mask) values on input as you type', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper
      .find('Input input')
      .simulate('change', { target: { value: '100' } });

    expect(wrapper.find('Input').prop('value')).toBe('1.00');
  });

  it('Should reset value to empty if you type delete the value after having one', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper
      .find('Input input')
      .simulate('change', { target: { value: '100' } });

    expect(wrapper.find('Input').prop('value')).toBe('1.00');

    wrapper.find('Input input').simulate('change', { target: { value: '' } });

    expect(wrapper.find('Input').prop('value')).toBe('');
  });

  it('Should change to next month accordingly', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper.find(AddonRight).simulate('click');

    expect(wrapper.find(Month).text()).toBe(
      dayjs()
        .add(1, 'month')
        .format('MMMM'),
    );

    expect(wrapper.find(Year).text()).toBe(
      dayjs()
        .add(1, 'month')
        .format('YYYY'),
    );
  });

  it('Should not change to previous month if the current month is the actual month', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper.find(AddonLeft).simulate('click');

    expect(wrapper.find(Month).text()).toBe(dayjs().format('MMMM'));

    expect(wrapper.find(Year).text()).toBe(dayjs().format('YYYY'));
  });

  it('Should change to previous month accordingly', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper.find(AddonRight).simulate('click');
    wrapper.find(AddonRight).simulate('click');
    wrapper.find(AddonRight).simulate('click');
    wrapper.find(AddonLeft).simulate('click');

    expect(wrapper.find(Month).text()).toBe(
      dayjs()
        .add(2, 'month')
        .format('MMMM'),
    );

    expect(wrapper.find(Year).text()).toBe(
      dayjs()
        .add(2, 'month')
        .format('YYYY'),
    );
  });

  it('Should calculate the monthly value accordingly and pass correct props to Summary', () => {
    const wrapper = mount(<SavingPlanSimulation />);

    wrapper
      .find('Input input')
      .simulate('change', { target: { value: '10000' } });

    expect(wrapper.find(SummaryValue).text()).toBe('$100.00');
    expect(wrapper.find('Summary').prop('monthsDiff')).toBe(0);

    wrapper.find(AddonRight).simulate('click');
    wrapper.find(AddonRight).simulate('click');
    wrapper.find(AddonRight).simulate('click');

    expect(wrapper.find(SummaryValue).text()).toBe('$34.00');
    expect(wrapper.find('Summary').prop('monthsDiff')).toBe(3);

    wrapper.find(AddonLeft).simulate('click');

    expect(wrapper.find(SummaryValue).text()).toBe('$50.00');
    expect(wrapper.find('Summary').prop('monthsDiff')).toBe(2);
  });
});
