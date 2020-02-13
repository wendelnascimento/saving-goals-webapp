import React from 'react';
import { shallow, mount } from 'enzyme';

import BaseLayout from '../BaseLayout';

describe('<BaseLayout />', () => {
  it('Should render', () => {
    shallow(<BaseLayout />);
  });

  it('Should render with children', () => {
    shallow(
      <BaseLayout>
        <h1>Test</h1>
      </BaseLayout>,
    );
  });

  it('Should math stored snapshot', () => {
    const wrapperWithChildren = mount(
      <BaseLayout>
        <h1>Test</h1>
      </BaseLayout>,
    );
    const emptyWrapper = mount(<BaseLayout />);

    expect(wrapperWithChildren).toMatchSnapshot();
    expect(emptyWrapper).toMatchSnapshot();
  });
});
