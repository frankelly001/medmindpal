import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKeys = {
  CURRENT_USER: 'CURRENT_USER',
};

const store = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const get = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

const update = async (key: any, data: any) => {
  await AsyncStorage?.mergeItem(key, JSON.stringify(data));
};

export const localStorage = {store, get, remove, update};
