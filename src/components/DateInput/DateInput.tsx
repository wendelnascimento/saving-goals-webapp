import React from 'react';

import { Props } from '../../types/dateInput';

import arrowIcon from '../../icons/arrow.svg';

import {
  Container,
  Legend,
  InputBox,
  Field,
  Month,
  Year,
  AddonLeft,
  AddonRight,
  AddonImage,
} from './styles';

const DateInput: React.FC<Props> = props => (
  <Container>
    <Legend>React goal by</Legend>
    <InputBox>
      <AddonLeft onClick={props.previousMonth}>
        <AddonImage src={arrowIcon} />
      </AddonLeft>
      <Field>
        <Month>{props.value.format('MMMM')}</Month>
        <Year>{props.value.format('YYYY')}</Year>
      </Field>
      <AddonRight onClick={props.nextMonth}>
        <AddonImage src={arrowIcon} />
      </AddonRight>
    </InputBox>
  </Container>
);

export default DateInput;
