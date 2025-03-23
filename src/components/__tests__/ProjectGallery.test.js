import { render, screen } from '@testing-library/react';
import ProjectGallery from '../ProjectGallery';

test('renders project gallery', () => {
  render(<ProjectGallery />);
  expect(screen.getByText('Project 1')).toBeInTheDocument();
});