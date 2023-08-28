import AnimatedLottieView, {AnimationObject} from 'lottie-react-native';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import ModalOverlay from '../app-modal-overlay';
import {appLoadingStyles} from './styles';
import {AppLoadinTypes} from './type';

const AppLoading: FunctionComponent<AppLoadinTypes> = ({
  extraLoadingStyles,
  visible = true,
  loadingIcon = require('../../assets/svgs/animated/loader.json'),
}) => {
  return (
    <ModalOverlay visible={visible}>
      <View style={[appLoadingStyles.container, extraLoadingStyles]}>
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
