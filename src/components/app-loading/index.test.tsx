import React from 'react';
import {render} from '@testing-library/react-native';
import AppLoading from '../app-loading';

// Mocking dependencies
jest.mock('../app-modal-overlay', () => 'ModalOverlay');
jest.mock('lottie-react-native', () => ({
  __esModule: true,
  default: 'AnimatedLottieView',
}));
jest.mock('../app-back-btn/styles', () => ({
  appBackBtnStyles: {container: 'mockedContainerStyle'},
}));
jest.mock('../../assets/svgs/animated/loader.json', () => 'mockedLoaderJson');

describe('AppLoading', () => {
  it('renders correctly', () => {
    const props = {
      extraLoadingStyles: {backgroundColor: 'red'},
      visible: true,
      loadingIcon: 'mockedLoaderJson',
    };

    expect(<AppLoading {...props} />).toBeTruthy();
  });
});
