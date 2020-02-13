import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from '../Card';

describe('<Card />', () => {
  it('Should render', () => {
    shallow(<Card />);
  });

  it('Should render with children', () => {
    shallow(
      <Card>
        <h1>Test</h1>
      </Card>,
    );
  });

  it('Should math stored snapshot', () => {
    const wrapperWithChildren = mount(
      <Card>
        <h1>Test</h1>
      </Card>,
    );
    const emptyWrapper = mount(<Card />);

    expect(wrapperWithChildren).toMatchSnapshot();
    expect(emptyWrapper).toMatchSnapshot();
  });
});
