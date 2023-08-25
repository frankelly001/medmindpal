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
import {COLOR_TYPES, screenHeight, screenWidth} from '../../../../config/const';
import {AuthBG, GoogleIcon} from '../../../../constants/all-svgs';
import colors from '../../../../constants/colors';
import {routesNames} from '../../../../constants/routes';
import {ScreenProps} from '../../../../constants/types';
import {useFormValidation} from '../../../../hooks/useFormValidation';
import {siginVS} from './schema';
import {signinStyle} from './styles';
import {signinFields} from './types';

const Signin: FunctionComponent<ScreenProps> = ({navigation}) => {
  const [values, setValues] = useState<{[key in signinFields]: string}>({
    email: '',
    password: '',
  });

  const fields: {[key in 'name']: signinFields}[] = [
    {name: 'email'},
    {name: 'password'},
  ];

  const {errors, isValid, validateField} = useFormValidation(siginVS);
  const [loading, setLoading] = useState(false);

  const handleChange = async (text: string, name: string) => {
    setValues(values => {
      return {...values, [name]: text};
    });
    validateField({
      values: {...values, [name]: text},
      field: name,
      initialize: true,
    });
  };

  const submit = async () => {
    try {
      // if (!shouldValidate) setShouldValidate(true);
      const valid = await isValid(values);
      if (!valid) return Alert.alert('E no Valid');
      setLoading(true);
      Alert.alert('Success');
      navigation.navigate(routesNames.SIGNUP);
      // const data: any = await getVoter(
      //   convertStringKeyValuesToLowercase(values),
      // );
      // await storeData(storageKeys.ACCOUNT_DATA, {
      //   accountType: acctType.user,
      //   data,
      // });
      // setUser(data);
      // setAccountType(acctType.user);
      // showToast('success', `Welcome ${data.fullname}`);
    } catch (error: any) {
      // showToast('error', error);
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);

  return (
    <View style={signinStyle.container}>
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
              marginTop: 25,
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
            style={{marginVertical: 25}}
          />
          <View>
            {fields.map(el => (
              <View key={el.name} style={{marginVertical: 10}}>
                <AppInput
                  value={values[el.name]}
                  onChangeText={(text: string) => handleChange(text, el.name)}
                  placeHolder={el.name}
                />
                <ErrorMessage
                  error={!!errors?.[el.name]}
                  message={errors?.[el.name]?.message}
                />
              </View>
            ))}
            <AppButton
              onPress={() => navigation.navigate(routesNames.SIGNUP)}
              text="LOG IN"
              textColor="primary_1"
              buttonColor="secondary_2"
              style={{marginVertical: 10}}
            />

            <AppText
              text={'Forgot Password?'}
              align="center"
              size={14}
              weight="SemiBold"
              color="text_1"
              style={{marginVertical: 10}}
            />
          </View>
        </View>
        <AuthNavHelper authType="sign_up" />
      </AppScreen>
    </View>
  );
};

export default Signin;
