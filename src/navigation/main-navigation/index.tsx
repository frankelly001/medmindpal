import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesNames} from '../../constants/routes';
import AuthStack from '../auth-stack';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routesNames.AUTH_STACK}
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
