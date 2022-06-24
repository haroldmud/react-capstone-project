import React from 'react';
import renderer from 'react-test-renderer';
import Manufactures from '../../_mock_/components/manufacture';

it('component render correctely', () => {
  const tree = renderer
    .create(<Manufactures />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
