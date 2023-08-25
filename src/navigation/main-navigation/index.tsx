import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesNames} from '../../constants/routes';
import AddReminder from '../../screens/stack-screens/add-reminder';
import EditReminder from '../../screens/stack-screens/edit-reminder';
import AuthStack from '../auth-stack';
import BottomTab from '../bottom-tab';

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
      <Stack.Screen
        name={routesNames.BOTTOM_TAB}
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routesNames.ADD_REMINDER}
        component={AddReminder}
        options={{
          title: 'Create Reminder',
        }}
      />
      <Stack.Screen
        name={routesNames.EDIT_REMINDER}
        component={EditReminder}
        options={{
          title: 'Edit Reminder',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
