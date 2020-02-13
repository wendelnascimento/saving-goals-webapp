import React from 'react';

import { Props } from '../../types/summary';

import {
  Container,
  SummaryRow,
  SummaryTitle,
  SummaryValue,
  SummaryRowGray,
  SummaryDescription,
} from './styles';

const Summary = (props: Props) => (
  <Container>
    <SummaryRow>
      <SummaryTitle>Monthly amount</SummaryTitle>
      <SummaryValue>{props.monthlyValue}</SummaryValue>
    </SummaryRow>
    <SummaryRowGray>
      <SummaryDescription>
        You&apos;re planning{' '}
        <strong>{props.monthsDiff} monthly deposits</strong> to reach your{' '}
        <strong>${props.value || 0}</strong> goal by{' '}
        <strong>{props.selectedDate.format('MMMM YYYY')}</strong>
      </SummaryDescription>
    </SummaryRowGray>
  </Container>
);

export default Summary;
