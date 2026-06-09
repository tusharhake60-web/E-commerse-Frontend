import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BussinessDashboard from './BussinessDashboard';

test('renders the business dashboard hero content', () => {
  render(
    <MemoryRouter>
      <BussinessDashboard />
    </MemoryRouter>
  );

  expect(screen.getByText(/business dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/manage products, orders, and customer activity/i)).toBeInTheDocument();
});
