import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('home', () => {
  it('should have learn text', () => {
    render(<Home />);
    const logo_text = 'MUNGCHI';
    const header_assest_search = '검색';
    const text = screen.getByText(logo_text);
    const alt = screen.getByAltText(header_assest_search);
    expect(text).toBeInTheDocument();
    expect(alt).toBeInTheDocument();
  });
});
