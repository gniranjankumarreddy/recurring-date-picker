import { render, screen } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';

test('renders all recurrence options', () => {
  render(<RecurrenceOptions />);
  ['Daily', 'Weekly', 'Monthly', 'Yearly'].forEach((label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
