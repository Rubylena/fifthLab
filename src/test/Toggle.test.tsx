import { render, fireEvent, screen } from '@testing-library/react';
import Toggler from '../components/ListUsers/Toggle';

describe('Toggler', () => {
    it('renders correctly and toggles state', () => {
        const setEnabled = jest.fn();
        render(<Toggler enabled={false} setEnabled={setEnabled} />);
    
        // Check initial state
        const switches = screen.getAllByRole('switch');
        expect(switches[0]).toHaveClass('bg-gray-200'); // Assuming the first switch is the one you want to test
    
        // Simulate clicking the toggle
        fireEvent.click(switches[0]);
    
        // Expect setEnabled to have been called
        expect(setEnabled).toHaveBeenCalledWith(true);
    
        // Re-render with the toggle "enabled"
        render(<Toggler enabled={true} setEnabled={setEnabled} />);
    
        // Check if the toggle reflects the "enabled" state
        const enabledSwitches = screen.getAllByRole('switch');
        expect(enabledSwitches[1]).toHaveClass('bg-cyan-500'); // Again, assuming the first switch is the one you want to test
      });
});