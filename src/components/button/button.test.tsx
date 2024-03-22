import Button from '@/components/button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders appropriately', () => {
    render(<Button>Save</Button>);
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  });
});
