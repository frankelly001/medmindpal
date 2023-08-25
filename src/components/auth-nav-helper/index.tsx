import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FunctionComponent} from 'react';
import {routesNames} from '../../constants/routes';
import AppText from '../app-text';

const authHelper = {
  ['sign_up']: {
    routeName: routesNames.SIGNUP,
    label: "DON'T HAVE AN ACCOUNT? ",
    btnText: 'SIGN UP',
  },
  ['sign_in']: {
    routeName: routesNames.SIGNIN,
    label: 'ALREADY HAVE AN ACCOUNT? ',
    btnText: 'SIGN IN',
  },
};

const AuthNavHelper: FunctionComponent<{authType: 'sign_up' | 'sign_in'}> = ({
  authType = 'sign_in',
}) => {
  const navigation = useNavigation() as StackNavigationProp<
    Record<string, object | undefined>,
    string
  >;

  const texts: {
    text: string;
    color: 'text_2' | 'secondary_1';
    routeName?: string;
  }[] = [
    {text: authHelper[authType].label, color: 'text_2'},
    {
      text: authHelper[authType].btnText,
      color: 'secondary_1',
      routeName: authHelper[authType].routeName,
    },
  ];
  return (
    <AppText
      // text={['ALREADY HAVE AN ACCOUNT? LOG IN']}
      text={texts.map((el, i) => (
        <AppText
          key={i}
          text={el.text}
          size={14}
          color={el.color}
          weight="Regular"
          disabled={!el.routeName}
          // onPress={() =>
          //   el.routeName ? navigation.navigate(el.routeName) : null
          // }
          style={{marginVertical: 20}}
        />
      ))}
      style={{marginVertical: 20}}
      align="center"
    />
  );
};

export default AuthNavHelper;
