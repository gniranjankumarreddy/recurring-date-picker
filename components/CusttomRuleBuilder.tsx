import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const CustomRuleBuilder = () => {
  const { interval, setInterval } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Every X units:</label>
      <input
        type="number"
        min={1}
        className="border px-2 py-1"
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
      />
    </div>
  );
};

export default CustomRuleBuilder;
