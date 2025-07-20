 Recurring Date Picker Component

A reusable, configurable recurring date picker built in Next.js with Tailwind CSS and Zustand for state management. Inspired by the recurring task picker in TickTick.

 Features
-  Daily, Weekly, Monthly, Yearly recurrence
-  Custom interval control (every X days/weeks/months)
-  Select specific weekdays or "nth weekday" of month
-  Start date + optional end date
-  Live calendar preview of selected recurrence
-  Unit + integration tested

---

 Tech Stack
- Framework: Next.js with TypeScript
- Styling: Tailwind CSS
- State Management: Zustand
- Date Logic: date-fns
- Testing: Jest + React Testing Library

---

Folder Structure

/components
  ├── RecurrenceOptions.tsx
  ├── CustomRuleBuilder.tsx
  ├── DateRangeSelector.tsx
  └── CalendarPreview.tsx
/store
  └── useRecurrenceStore.ts
/utils
  └── generateRecurringDates.ts
/tests
  ├── generateRecurringDates.test.ts
  └── RecurrenceIntegration.test.tsx


