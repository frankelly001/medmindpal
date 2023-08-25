import {FunctionComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import AppButton from '../../../../components/app-button';
import AppText from '../../../../components/app-text';
import AuthNavHelper from '../../../../components/auth-nav-helper';
import {COLOR_TYPES, screenHeight, screenWidth} from '../../../../config/const';
import {BG2} from '../../../../constants/all-svgs';
import {authTypeStyle} from './styles';

const AuthType: FunctionComponent = () => {
  return (
    <View style={authTypeStyle.container}>
      <View style={authTypeStyle.svgBg}>
        <BG2 width={screenWidth} />
      </View>
      <SafeAreaView style={authTypeStyle.safeArea}>
        <View style={authTypeStyle.contentContainer}>
          <AppText
            text={'We are what we do'}
            size={30}
            color="text_1"
            weight="Medium"
            align="center"
          />
          <AppText
            text={
              'Thousand of people are using medmindpal for meditation reminder'
            }
            size={16}
            color="text_2"
            weight="Light"
            style={authTypeStyle.summaryText}
            align="center"
          />

          <AppButton
            text="SIGN IN"
            textColor="primary_1"
            buttonColor="secondary_1"
          />

          <AuthNavHelper authType="sign_in" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthType;
