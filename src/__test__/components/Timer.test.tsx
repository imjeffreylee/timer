import Timer from '../../components/Timer';
import { fireEvent, render } from '@testing-library/react';

it('renders timer correctly', () => {
  const { getByTestId, getByText } = render(<Timer />);
  expect(getByTestId('timer')).toBeTruthy();
  expect(getByText('start')).toBeInTheDocument();
  expect(getByTestId('time')).toHaveTextContent('0');
})

it('starts counting when start button clicked', () => {
  jest.useFakeTimers();
  const { getByText, getByTestId } = render(<Timer />);
  const startButton = getByText('start');
  fireEvent.click(startButton)
  jest.advanceTimersByTime(1000);
  expect(getByTestId('time')).toHaveTextContent('1')
})