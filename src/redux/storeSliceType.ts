import {authState} from './auth/type';
import {userState} from './user/type';

export type storeState = {
  userReducer: userState;
  authReducer: authState;
};
