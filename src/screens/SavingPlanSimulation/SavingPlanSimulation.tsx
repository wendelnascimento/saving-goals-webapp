import React from 'react';

import Card from '../../components/Card';

import { Wrapper, SavingIcon, Title, Subtitle } from './styles';

import academySvg from '../../icons/academy.svg';

const SavingPlanSimulation = () => (
  <Wrapper>
    <Card>
      <SavingIcon src={academySvg} />
      <Title>Go to College</Title>
      <Subtitle>Saving goal</Subtitle>
    </Card>
  </Wrapper>
);

export default SavingPlanSimulation;
