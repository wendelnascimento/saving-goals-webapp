import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';

import Card from '../../components/Card';
import Input from '../../components/Input';
import DateInput from '../../components/DateInput';

import {
  Wrapper,
  SavingIcon,
  Title,
  Subtitle,
  InputRow,
  InputWrapper,
} from './styles';

import academySvg from '../../icons/academy.svg';

const SavingPlanSimulation = () => {
  const [value, setValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const originalDate = useMemo(() => dayjs(), []);

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const replacedValue =
      parseInt(event.target.value.replace(/\D/g, ''), 10) / 100;

    if (!Number.isNaN(+replacedValue)) {
      setValue(
        Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        })
          .format(+replacedValue)
          .replace('$', ''),
      );
    } else if (!event.target.value) {
      setValue(event.target.value);
    }
  };

  const handleNextMonth = () => {
    setSelectedDate(selectedDate.add(1, 'month'));
  };

  const handlePreviousMonth = () => {
    if (selectedDate.subtract(1, 'month').isAfter(dayjs())) {
      setSelectedDate(selectedDate.subtract(1, 'month'));
    } else {
      setSelectedDate(originalDate);
    }
  };

  return (
    <Wrapper>
      <Card>
        <SavingIcon src={academySvg} />
        <Title>Go to College</Title>
        <Subtitle>Saving goal</Subtitle>
        <InputRow>
          <InputWrapper>
            <Input
              label="Total amount"
              addonBefore="$"
              value={value}
              onChange={handleValueChange}
            />
          </InputWrapper>
          <InputWrapper>
            <DateInput
              nextMonth={handleNextMonth}
              previousMonth={handlePreviousMonth}
              value={selectedDate}
            />
          </InputWrapper>
        </InputRow>
      </Card>
    </Wrapper>
  );
};

export default SavingPlanSimulation;
