import { render } from '@testing-library/react';
import Home from '../app/Home';

// Mock the child components
jest.mock('../components/ShowUsers/ShowUsers', () => () => <div>ShowUsers component</div>);
jest.mock('../components/ListUsers/ListUsers', () => () => <div>ListUsers component</div>);

describe('Home component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    
    expect(getByText('ShowUsers component')).toBeInTheDocument();
    expect(getByText('ListUsers component')).toBeInTheDocument();
  });
});