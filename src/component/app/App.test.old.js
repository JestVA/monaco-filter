import { render, screen } from '@testing-library/react';
import { App } from '.';

test('renders learn react link', () => {
  const component = render(<App />);
  const linkElement = screen.getByText(/hhhh/i);
  // expect(linkElement).toBeInTheDocument();
  // expect(component).toMatchSnapshot()
});
