import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../Input';
import { AddonInput, Legend } from '../styles';

describe('<Input />', () => {
  const props = {
    label: 'Test label',
    onChange: jest.fn(),
    value: '',
    addonBefore: '$',
  };

  it('Should render', () => {
    shallow(
      <Input
        label={props.label}
        onChange={props.onChange}
        value={props.value}
        addonBefore={props.addonBefore}
      />,
    );
  });

  it('Should match stored snapshot', () => {
    const wrapper = mount(
      <Input
        label={props.label}
        onChange={props.onChange}
        value={props.value}
        addonBefore={props.addonBefore}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should have an addon on left', () => {
    const wrapper = mount(
      <Input
        label={props.label}
        onChange={props.onChange}
        value={props.value}
        addonBefore={props.addonBefore}
      />,
    );

    expect(wrapper.find(AddonInput).text()).toEqual('$');
  });

  it('Should have the correct label', () => {
    const wrapper = mount(
      <Input
        label={props.label}
        onChange={props.onChange}
        value={props.value}
        addonBefore={props.addonBefore}
      />,
    );

    expect(wrapper.find(Legend).text()).toEqual('Test label');
  });
});
