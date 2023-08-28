import {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../../../components/app-button';
import AppScreen from '../../../components/app-screen';
import AppText from '../../../components/app-text';
import colors from '../../../constants/colors';
import {authServices} from '../../../redux/auth/authServices';
import {storeState} from '../../../redux/storeSliceType';
import {setUser} from '../../../redux/user/userSlice';

const Profile: FunctionComponent = () => {
  const {user} = useSelector((state: storeState) => state.userReducer);
  const dispatch: any = useDispatch();

  return (
    <AppScreen>
      <View
        style={{
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppText
          text="Okeke Franklyn"
          size={24}
          weight="Bold"
          align="center"
          style={{marginVertical: 10}}
        />
        <AppText
          text="Frankelly344@gmail.com"
          size={15}
          align="center"
          style={{marginVertical: 10}}
        />
        <AppButton
          text="Log out"
          buttonColor={'error_1'}
          textColor="white"
          onPress={async () => {
            if (user) {
              await authServices.logout(user.email);
              dispatch(setUser(null));
            }
          }}
          style={{marginTop: 20, padding: 5, width: '50%'}}
        />
      </View>
    </AppScreen>
  );
};

export default Profile;
