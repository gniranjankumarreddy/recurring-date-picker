import { create } from 'zustand';

type State = {
  recurrenceType: string;
  interval: number;
  startDate: string;
  endDate: string;
  setRecurrenceType: (type: string) => void;
  setInterval: (interval: number) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
};

export const useRecurrenceStore = create<State>((set) => ({
  recurrenceType: 'Daily',
  interval: 1,
  startDate: '',
  endDate: '',
  setRecurrenceType: (recurrenceType) => set({ recurrenceType }),
  setInterval: (interval) => set({ interval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
