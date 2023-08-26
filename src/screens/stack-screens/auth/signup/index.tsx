import {FunctionComponent, useState} from 'react';
import {Alert, SafeAreaView, TouchableOpacity, View} from 'react-native';
import AppBackBtn from '../../../../components/app-back-btn';
import AppButton from '../../../../components/app-button';
import Icon, {AppVectorIcons} from '../../../../components/app-icons';
import AppInput from '../../../../components/app-input';
import AppScreen from '../../../../components/app-screen';
import AppText from '../../../../components/app-text';
import AuthNavHelper from '../../../../components/auth-nav-helper';
import ErrorMessage from '../../../../components/error-message';
import {screenWidth} from '../../../../config/const';
import {AuthBG, GoogleIcon} from '../../../../constants/all-svgs';
import colors from '../../../../constants/colors';
import {routesNames} from '../../../../constants/routes';
import {ScreenProps} from '../../../../constants/types';
import {useFormValidation} from '../../../../hooks/useFormValidation';
import {sigupVS} from './schema';
import {signupStyle} from './styles';
import {signupFields} from './types';
import {useSignup} from './useSignup';

const Signup: FunctionComponent<ScreenProps> = ({navigation}) => {
  const {_handkeSubmit, _handleChange, errors, loading, values, fields} =
    useSignup();

  return (
    <View style={signupStyle.container}>
      <View style={signupStyle.svgBg}>
        <AuthBG width={screenWidth} />
      </View>
      <AppScreen style={signupStyle.safeArea}>
        <View style={signupStyle.contentContainer}>
          <AppBackBtn />
          <AppText
            text={'Create your account'}
            size={30}
            color="text_1"
            weight="Medium"
            align="center"
            style={signupStyle.mv25}
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
            style={signupStyle.google}
          />
          <AppText
            text={'OR SIGN UP WITH EMAIL'}
            align="center"
            size={14}
            weight="SemiBold"
            color="text_2"
            style={signupStyle.mv25}
          />
          <View>
            {fields.map(el => (
              <View key={el.name} style={signupStyle.mv10}>
                <AppInput
                  value={values[el.name]}
                  onChangeText={(text: string) => _handleChange(text, el.name)}
                  placeHolder={el?.placeholder ?? el.name}
                  textContentType={el.textContentType}
                />
                <ErrorMessage
                  error={!!errors?.[el.name]}
                  message={errors?.[el.name]?.message}
                />
              </View>
            ))}
            <AppButton
              onPress={() => navigation.navigate(routesNames.BOTTOM_TAB)}
              text="SIGN UP"
              textColor="primary_1"
              buttonColor="secondary_2"
              style={signupStyle.mv10}
            />

            <AppText
              text={'Forgot Password?'}
              align="center"
              size={14}
              weight="SemiBold"
              color="text_1"
              style={signupStyle.mv10}
            />
          </View>
        </View>
        <AuthNavHelper authType="sign_in" />
      </AppScreen>
    </View>
  );
};

export default Signup;
