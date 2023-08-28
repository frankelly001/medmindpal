import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon, {AppVectorIcons} from '../../components/app-icons';
import colors from '../../constants/colors';
import {routesNames} from '../../constants/routes';
import Home from '../../screens/bottom-tabs/home';
import Profile from '../../screens/bottom-tabs/profile';
import Reminders from '../../screens/bottom-tabs/reminders';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarLabelStyle: {marginBottom: 3},
        tabBarStyle: {
          backgroundColor: colors.white,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.secondary_1,
        tabBarInactiveTintColor: colors.text_1,
      }}>
      <Tab.Screen
        name={routesNames.HOME}
        component={Home}
        options={{
          title: 'Home',
          headerTitle: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon
              IconTag={AppVectorIcons.MaterialIcons}
              name="dashboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.REMINDERS}
        component={Reminders}
        options={{
          title: 'Reminders',
          headerTitle: 'Reminders',

          tabBarIcon: ({color, size}) => (
            <Icon
              IconTag={AppVectorIcons.Ionicons}
              name="calendar"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.PROFILE}
        component={Profile}
        options={{
          title: 'Profile',

          tabBarIcon: ({color, size}) => (
            <Icon
              IconTag={AppVectorIcons.MaterialIcons}
              name="person"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
