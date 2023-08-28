import AnimatedLottieView, {AnimationObject} from 'lottie-react-native';
import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import AppText from '../app-text';
import ModalOverlay from '../modal-overlay';
import {AppLoadinTypes} from './type';

const AppLoading: FunctionComponent<AppLoadinTypes> = ({
  extraLoadingStyles,
  visible = true,
  loadingIcon = require('../../assets/svgs/animated/loader.json'),
}) => {
  return (
    <ModalOverlay visible={visible}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          },
          extraLoadingStyles,
        ]}>
        <AnimatedLottieView
          style={{width: 100, height: 100}}
          autoPlay
          loop
          source={loadingIcon}
        />
      </View>
    </ModalOverlay>
  );
};

export default AppLoading;
