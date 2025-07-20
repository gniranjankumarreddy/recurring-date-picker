import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const DateRangeSelector = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="flex flex-col space-y-4 mb-4">
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="ml-2" />
      </div>
      <div>
        <label>End Date (optional):</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="ml-2" />
      </div>
    </div>
  );
};

export default DateRangeSelector;
