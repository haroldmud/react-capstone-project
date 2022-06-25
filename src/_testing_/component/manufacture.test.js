import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Manufactures from '../../_mock_/components/manufacture';

it('component render correctely', () => {
  const tree = renderer
    .create(<Manufactures />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Test title to be rendered', () => {
  render(<Manufactures />);
  const linkElement = screen.getByRole('heading', { name: '1 of 0' });
  expect(linkElement).toBeInTheDocument();
});
