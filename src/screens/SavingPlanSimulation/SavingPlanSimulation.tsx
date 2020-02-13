import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';

import Card from '../../components/Card';
import Input from '../../components/Input';
import DateInput from '../../components/DateInput';
import Summary from '../../components/Summary';

import {
  Wrapper,
  SavingIcon,
  Title,
  Subtitle,
  InputRow,
  InputWrapper,
  SummaryContainer,
  SubmitButton,
} from './styles';

import academySvg from '../../icons/academy.svg';

const SavingPlanSimulation = () => {
  const [value, setValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const originalDate = useMemo(() => dayjs(), []);
  const monthlyValue = useMemo(() => {
    const parsedValue = parseInt(value.replace(/\D/g, ''), 10) / 100;
    if (selectedDate && value) {
      const months = selectedDate.diff(originalDate, 'month');
      if (months > 0) {
        return Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(Math.ceil(parsedValue / months));
      }
    }
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.ceil(parsedValue || 0));
  }, [originalDate, selectedDate, value]);
  const monthsDiff = useMemo(() => selectedDate.diff(originalDate, 'month'), [
    selectedDate,
    originalDate,
  ]);

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
    if (selectedDate.subtract(1, 'month').isAfter(originalDate)) {
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
        <SummaryContainer>
          <Summary
            monthlyValue={monthlyValue}
            monthsDiff={monthsDiff}
            value={value}
            selectedDate={selectedDate}
          />
        </SummaryContainer>
        <SubmitButton>Finish</SubmitButton>
      </Card>
    </Wrapper>
  );
};

export default SavingPlanSimulation;
