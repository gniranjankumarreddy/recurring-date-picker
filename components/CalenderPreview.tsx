import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';
import { generateRecurringDates } from '../utils/generateRecurringDates';

const CalendarPreview = () => {
  const { recurrenceType, interval, startDate, endDate } = useRecurrenceStore();
  const dates = generateRecurringDates({ recurrenceType, interval, startDate, endDate });

  return (
    <div className="border p-4 mt-4">
      <h3 className="font-bold mb-2">Preview Dates:</h3>
      <ul className="grid grid-cols-2 gap-1">
        {dates.slice(0, 10).map((date, i) => (
          <li key={i} className="text-sm text-gray-800">
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
