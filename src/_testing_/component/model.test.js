import React from 'react';
import renderer from 'react-test-renderer';
import Model from '../../_mock_/components/Model';

it('component render correctly', () => {
  const rold = renderer
    .create(<Model/>)
    .toJSON();
  expect(rold).toMatchSnapshot();
});
