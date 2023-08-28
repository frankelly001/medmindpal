import {FunctionComponent} from 'react';
import {View} from 'react-native';
import AppBackBtn from '../../../../components/app-back-btn';
import AppButton from '../../../../components/app-button';
import Icon, {AppVectorIcons} from '../../../../components/app-icons';
import AppInput from '../../../../components/app-input';
import AppLoading from '../../../../components/app-loading';
import AppScreen from '../../../../components/app-screen';
import AppText from '../../../../components/app-text';
import AuthNavHelper from '../../../../components/auth-nav-helper';
import ErrorMessage from '../../../../components/error-message';
import {screenWidth} from '../../../../config/const';
import {AuthBG, GoogleIcon} from '../../../../constants/all-svgs';
import {routesNames} from '../../../../constants/routes';
import {ScreenProps} from '../../../../constants/types';
import {signinStyle} from './styles';
import {useSignin} from './useSignin';

const Signin: FunctionComponent<ScreenProps> = ({navigation}) => {
  const {_handleChange, _handleSubmit, errors, fields, loading, values} =
    useSignin();

  return (
    <View style={signinStyle.container}>
      <AppLoading visible={loading} />
      <View style={signinStyle.svgBg}>
        <AuthBG width={screenWidth} />
      </View>
      <AppScreen style={signinStyle.safeArea}>
        <View style={signinStyle.contentContainer}>
          <AppBackBtn />
          <AppText
            text={'Welcome Back'}
            size={30}
            color="text_1"
            weight="Medium"
            align="center"
            style={signinStyle.mv25}
          />

          <AppButton
            text="CONTINUE WITH FACEBOOK"
            LeftView={
              <Icon IconTag={AppVectorIcons.Fontisto} name="facebook" />
            }
            textColor="primary_1"
            buttonColor="secondary_2"
          />
          <AppButton
            text="CONTINUE WITH GOOGLE"
            LeftView={<GoogleIcon />}
            textColor="text_1"
            buttonColor="white"
            style={signinStyle.google}
          />
          <AppText
            text={'OR LOG IN WITH EMAIL'}
            align="center"
            size={14}
            weight="SemiBold"
            color="text_2"
            style={signinStyle.mv25}
          />
          <View>
            {fields.map(el => (
              <View key={el.name} style={signinStyle.mv10}>
                <AppInput
                  value={values[el.name]}
                  onChangeText={(text: string) => _handleChange(text, el.name)}
                  placeHolder={el.name}
                  borderWidth={1}
                />
                <ErrorMessage
                  error={!!errors?.[el.name]}
                  message={errors?.[el.name]?.message}
                />
              </View>
            ))}
            <AppButton
              onPress={_handleSubmit}
              text="SIGN IN"
              textColor="primary_1"
              buttonColor="secondary_2"
              style={signinStyle.mv10}
            />

            <AppText
              text={'Forgot Password?'}
              align="center"
              size={14}
              weight="SemiBold"
              color="text_1"
              style={signinStyle.mv10}
            />
          </View>
        </View>
        <AuthNavHelper authType="sign_up" />
      </AppScreen>
    </View>
  );
};

export default Signin;
