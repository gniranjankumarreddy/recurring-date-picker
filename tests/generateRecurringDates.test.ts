import { generateRecurringDates } from '../utils/generateRecurringDates';

test('generates 3 daily dates', () => {
  const result = generateRecurringDates({
    recurrenceType: 'Daily',
    interval: 1,
    startDate: '2025-01-01',
    endDate: '2025-01-03',
  });

  expect(result).toEqual(['2025-01-01', '2025-01-02', '2025-01-03']);
});
