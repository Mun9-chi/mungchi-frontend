import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile, { metadata } from './page';
import { LOGO_TEXT, TITLE } from './_constants/text';

describe('profile', () => {
  render(<Profile />);
  it('should render profile', () => {
    const logo_text = screen.getByText(LOGO_TEXT);
    expect(logo_text).toBeInTheDocument();
  });
  it('checked title', () => {
    expect(metadata.title).toStrictEqual(TITLE);
  });
});
