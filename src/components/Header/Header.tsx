import React from 'react';

import Logo from '../Logo';

import { Bar, BackButton, ButtonImage } from './styles';

import arrowSvg from '../../icons/arrow.svg';

const Header = () => (
  <Bar>
    <BackButton>
      <ButtonImage src={arrowSvg} />
    </BackButton>
    <Logo />
  </Bar>
);

export default Header;
