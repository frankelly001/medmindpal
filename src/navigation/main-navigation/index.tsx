import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {routesNames} from '../../constants/routes';
import {localStorage, storageKeys} from '../../helpers/storage';
import {storeState} from '../../redux/storeSliceType';
import {setReminders, setUser} from '../../redux/user/userSlice';
import AddReminder from '../../screens/stack-screens/add-reminder';
import EditReminder from '../../screens/stack-screens/edit-reminder';
import AuthStack from '../auth-stack';
import BottomTab from '../bottom-tab';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {user} = useSelector((state: storeState) => state.userReducer);
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch: any = useDispatch();

  const getCurrentUserFronAsyncStore = async () => {
    const currentUserEmail = await localStorage.get(storageKeys.CURRENT_USER);

    if (currentUserEmail) {
      const currentUser = await localStorage.get(currentUserEmail);

      if (currentUser) {
        dispatch(setUser(currentUser.profile));
        dispatch(setReminders(currentUser.reminders));
      }
    }
    setIsInitialized(true);
  };

  useEffect(() => {
    getCurrentUserFronAsyncStore();
  }, []);

  if (!isInitialized) return null;

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen
          name={routesNames.AUTH_STACK}
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
