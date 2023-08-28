import {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../../../components/app-button';
import AppScreen from '../../../components/app-screen';
import AppText from '../../../components/app-text';
import {authServices} from '../../../redux/auth/authServices';
import {storeState} from '../../../redux/storeSliceType';
import {setUser} from '../../../redux/user/userSlice';
import {profileStyles} from './styles';

const Profile: FunctionComponent = () => {
  const {user} = useSelector((state: storeState) => state.userReducer);
  const dispatch: any = useDispatch();

  return (
    <AppScreen>
      <View style={profileStyles.container}>
        <AppText
          text={user?.fullname}
          size={24}
          weight="Bold"
          align="center"
          style={profileStyles.mv10}
        />
        <AppText
          text={user?.email}
          size={15}
          align="center"
          style={profileStyles.mv10}
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
          style={profileStyles.btn}
        />
      </View>
    </AppScreen>
  );
};

export default Profile;
