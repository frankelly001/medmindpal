import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesNames} from '../../constants/routes';
import Signin from '../../screens/stack-screens/auth/signin';
import AuthType from '../../screens/stack-screens/auth/type';
import Onboarding from '../../screens/stack-screens/onboarding';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routesNames.ONBOARDING}
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
