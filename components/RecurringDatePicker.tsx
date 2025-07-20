"use client";

import { useState } from "react";

export default function RecurringDatePicker() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="p-4 bg-white rounded shadow">
      <label className="block mb-2 font-semibold">Select a day</label>
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <p className="mt-4">You selected: {selectedDay}</p>
    </div>
  );
}
