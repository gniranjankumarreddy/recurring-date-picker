import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const RecurrenceOptions = () => {
  const { recurrenceType, setRecurrenceType } = useRecurrenceStore();

  return (
    <div className="space-x-4 mb-4">
      {options.map((opt) => (
        <button
          key={opt}
          className={`px-3 py-1 rounded ${recurrenceType === opt ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setRecurrenceType(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
