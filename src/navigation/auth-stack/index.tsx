import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesNames} from '../../constants/routes';
import Signin from '../../screens/stack-screens/auth/signin';
import Signup from '../../screens/stack-screens/auth/signup';
import AuthType from '../../screens/stack-screens/auth/type';
import Onboarding from '../../screens/stack-screens/onboarding';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routesNames.ONBOARDING}
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routesNames.AUTH_TYPE}
        component={AuthType}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routesNames.SIGNIN}
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routesNames.SIGNUP}
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
