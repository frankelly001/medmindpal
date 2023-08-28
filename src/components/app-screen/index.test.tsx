import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import AppScreen from '../app-screen';

describe('AppScreen', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <AppScreen>
        <Text>Test Content</Text>
      </AppScreen>,
    );

    expect(getByText('Test Content')).toBeTruthy();
  });
});
