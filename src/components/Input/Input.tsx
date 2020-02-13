import React from 'react';

import { Props } from '../../types/input';

import { Container, Legend, InputBox, Field, AddonInput } from './styles';

const Input: React.FC<Props> = props => (
  <Container>
    <Legend>{props.label}</Legend>
    <InputBox>
      <AddonInput>{props.addonBefore}</AddonInput>
      <Field value={props.value} onChange={props.onChange} />
    </InputBox>
  </Container>
);

export default Input;
