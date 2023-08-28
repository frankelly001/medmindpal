import {localStorage, storageKeys} from '../../helpers/storage';
import bcrypt from 'react-native-bcrypt';
import {signinPayload, signupPayload} from './type';

const signin = async (payload: signinPayload) => {
  return new Promise<void>(async (resolve: any, reject: any) => {
    const {email, password} = payload;
    try {
      setTimeout(async () => {
        const userData = await localStorage.get(email.toLowerCase());
        if (!userData)
          return reject({message: 'Account does not exist', data: null});
        const {profile} = userData;
        const isValid = await bcrypt.compareSync(password, profile.password);
        if (!isValid) return reject({message: 'Wrong Password', data: null});
        await localStorage.store(storageKeys.CURRENT_USER, email.toLowerCase());
        return resolve({
          message: `Welcome ${profile.fullname}`,
          data: userData,
        });
      }, 2e3);
    } catch (error) {
      reject(error);
    }
  });
};
const signup = async (payload: signupPayload) => {
  return new Promise<void>(async (resolve: any, reject: any) => {
    const {email, password} = payload;

    try {
      setTimeout(async () => {
        const account = await localStorage.get(email.toLowerCase());
        if (account)
          return reject({message: 'Email has been used already', data: null});
        bcrypt.setRandomFallback(length => {
          const randomBytes = require('react-native-randombytes').randomBytes;
          const values = randomBytes(length);
          return values;
        });
        const saltRounds = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, saltRounds);
        await localStorage.store(email.toLowerCase(), {
          profile: {
            ...payload,
            password: hashedPassword,
          },
          reminders: [],
        });
        return resolve({message: 'Account created successfully', data: null});
      }, 2e3);
    } catch (error) {
      reject(error);
    }
  });
};

const logout = (email: string) => {
  return new Promise<void>(async (resolve: any, reject: any) => {
    try {
      // await localStorage.remove(email.toLowerCase());
      await localStorage.remove(storageKeys.CURRENT_USER);
      return resolve({message: 'Account created successfully', data: null});
    } catch (error) {
      reject(error);
    }
  });
};

export const authServices = {
  signin,
  signup,
  logout,
};
