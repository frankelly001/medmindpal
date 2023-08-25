import {FunctionComponent} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import AppButton from '../../../../components/app-button';
import Icon, {AppVectorIcons} from '../../../../components/app-icons';
import AppInput from '../../../../components/app-input';
import AppText from '../../../../components/app-text';
import AuthNavHelper from '../../../../components/auth-nav-helper';
import {COLOR_TYPES, screenHeight, screenWidth} from '../../../../config/const';
import {AuthBG, GoogleIcon} from '../../../../constants/all-svgs';
import colors from '../../../../constants/colors';
import {signinStyle} from './styles';

const Signin: FunctionComponent = () => {
  return (
    <View style={signinStyle.container}>
      <View style={signinStyle.svgBg}>
        <AuthBG width={screenWidth} />
      </View>
      <SafeAreaView style={signinStyle.safeArea}>
        <View style={signinStyle.contentContainer}>
          <TouchableOpacity
            style={{
              padding: 15,
              borderWidth: 1,
              alignSelf: 'flex-start',
              borderRadius: 50,
              borderColor: colors.primary_1,
            }}>
            <Icon
              IconTag={AppVectorIcons.AntDesign}
              name="arrowleft"
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
          <AppText
            text={'Welcome Back'}
            size={30}
            color="text_1"
            weight="Medium"
            align="center"
            style={{marginVertical: 25}}
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
            text="CONTINUE WITH FACEBOOK"
            LeftView={<GoogleIcon />}
            textColor="text_1"
            buttonColor="white"
            style={{
              marginVertical: 25,
              borderWidth: 1,
              borderColor: colors.primary_1,
            }}
          />
          <AppText
            text={'OR LOG IN WITH EMAIL'}
            align="center"
            size={14}
            weight="SemiBold"
            color="text_2"
          />
          <AppInput value="kkkkk" />
          <AppButton
            text="LOG IN"
            textColor="primary_1"
            buttonColor="secondary_2"
          />

          <AuthNavHelper authType="sign_up" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Signin;
