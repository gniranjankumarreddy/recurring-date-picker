import { addDays, addWeeks, addMonths, addYears, format } from 'date-fns';

type Params = {
  recurrenceType: string;
  interval: number;
  startDate: string;
  endDate?: string;
};

export const generateRecurringDates = ({ recurrenceType, interval, startDate, endDate }: Params): string[] => {
  const result: string[] = [];
  let current = new Date(startDate);
  const limit = endDate ? new Date(endDate) : addMonths(current, 3);

  const addFn =
    recurrenceType === 'Daily' ? addDays :
    recurrenceType === 'Weekly' ? addWeeks :
    recurrenceType === 'Monthly' ? addMonths :
    addYears;

  while (current <= limit) {
    result.push(format(current, 'yyyy-MM-dd'));
    current = addFn(current, interval);
  }

  return result;
};
