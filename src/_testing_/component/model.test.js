import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Model from '../../_mock_/components/Model';

it('component render correctly', () => {
  const rold = renderer
    .create(<Model/>)
    .toJSON();
  expect(rold).toMatchSnapshot();
});

test('Test title to be rendered', () => {
  render(<Model />);
  const linkElement = screen.getByRole('heading', { name: '1 of 0' });
  expect(linkElement).toBeInTheDocument();
});
