import AnimatedLottieView from 'lottie-react-native';
import React, {FunctionComponent} from 'react';
import {Platform, View} from 'react-native';
import Toast, {
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';
import colors from '../../constants/colors';
import AppText from '../app-text';
import {appToastViewStyles} from './styles';

type toastTypeProps = 'success' | 'error' | 'info';

type appToastViewProps = {
  message: string | undefined;
  type: toastTypeProps;
};

export const toastTypes: {[key: string]: toastTypeProps} = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

const IconSources = {
  [toastTypes.SUCCESS]: require('../../assets/svgs/animated/success.json'),
  [toastTypes.ERROR]: require('../../assets/svgs/animated/error.json'),
  [toastTypes.INFO]: require('../../assets/svgs/animated/info'),
};

const AppToastView: FunctionComponent<appToastViewProps> = ({
  message,
  type = 'info',
}) => {
  const toastColors = {
    [toastTypes.SUCCESS]: colors.green,
    [toastTypes.ERROR]: colors.error_1,
    [toastTypes.INFO]: colors.black,
  };

  return (
    <View style={appToastViewStyles.container}>
      <View
        style={[
          appToastViewStyles.toast,
          {backgroundColor: toastColors[type]},
        ]}>
        <AnimatedLottieView
          style={[
            appToastViewStyles.lottieIcon,
            type !== toastTypes.INFO && appToastViewStyles.iconFit,
          ]}
          autoPlay
          loop
          resizeMode={'center'}
          source={IconSources[type]}
        />
        <View style={{flex: 1, paddingRight: 15}}>
          <AppText text={message} weight="Medium" size={11} color={'white'} />
        </View>
      </View>
    </View>
  );
};

export const showToast = (
  toastType: toastTypeProps,
  message: string | undefined,
) => {
  return Toast.show({
    type: 'appToast',
    // text1: 'Hello',
    text2: message,
    props: {toastType},
  });
};

const toastConfig: ToastConfig = {
  appToast: (obj: ToastConfigParams<any>) => {
    const {text2, props} = obj;

    return <AppToastView message={text2} type={props.toastType} />;
  },
};

const AppToast = () => {
  return (
    <Toast config={toastConfig} topOffset={Platform.OS === 'ios' ? 70 : 5} />
  );
};

export default AppToast;
