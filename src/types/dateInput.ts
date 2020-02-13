import * as dayjs from 'dayjs';

export interface Props {
  nextMonth: () => void;
  previousMonth: () => void;
  value: dayjs.Dayjs;
}
