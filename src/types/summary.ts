import * as dayjs from 'dayjs';

export interface Props {
  monthlyValue: string;
  monthsDiff: number;
  value: string;
  selectedDate: dayjs.Dayjs;
}
