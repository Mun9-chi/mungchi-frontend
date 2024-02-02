import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './page';

describe('profile', () => {
  it('should render profile', () => {
    render(<Profile />);
    const logo_text = 'hello profile';
    const textElement = screen.getByText(logo_text);
    expect(textElement).toBeInTheDocument();
  });
});
