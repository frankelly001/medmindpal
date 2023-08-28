import {FunctionComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import AppButton from '../../../../components/app-button';
import AppText from '../../../../components/app-text';
import AuthNavHelper from '../../../../components/auth-nav-helper';
import {screenWidth} from '../../../../config/const';
import {BG2} from '../../../../constants/all-svgs';
import {routesNames} from '../../../../constants/routes';
import {ScreenProps} from '../../../../constants/types';
import {authTypeStyle} from './styles';

const AuthType: FunctionComponent<ScreenProps> = ({navigation}) => {
  return (
    <View style={authTypeStyle.container}>
      <View style={authTypeStyle.svgBg}>
        <BG2 width={screenWidth} />
      </View>
      <SafeAreaView style={authTypeStyle.safeArea}>
        <View style={authTypeStyle.contentContainer}>
          <AppText
            text={'Your Personal Medication Companion'}
            size={24}
            color="text_1"
            weight="Medium"
            align="center"
          />
          <AppText
            text={
              'Thousand of people are using medmindpal for medication reminder'
            }
            size={12}
            color="text_2"
            weight="Light"
            style={authTypeStyle.summaryText}
            align="center"
          />

          <AppButton
            text="SIGN UP"
            textColor="primary_1"
            buttonColor="secondary_1"
            onPress={() => navigation.navigate(routesNames.SIGNUP)}
          />

          <AuthNavHelper authType="sign_in" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthType;
