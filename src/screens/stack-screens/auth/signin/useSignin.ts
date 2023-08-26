import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {routesNames} from '../../../../constants/routes';
import {navigationProps} from '../../../../constants/types';
import {useFormValidation} from '../../../../hooks/useFormValidation';
import {siginVS} from './schema';
import {signinFields} from './types';

export const useSignin = () => {
  const navigation = useNavigation() as navigationProps;
  const [values, setValues] = useState<{[key in signinFields]: string}>({
    email: '',
    password: '',
  });

  const fields: {[key in 'name']: signinFields}[] = [
    {name: 'email'},
    {name: 'password'},
  ];

  const {errors, isValid, validateField} = useFormValidation(siginVS);
  const [loading, setLoading] = useState(false);

  const _handleChange = async (text: string, name: string) => {
    setValues(values => {
      return {...values, [name]: text};
    });
    validateField({
      values: {...values, [name]: text},
      field: name,
      initialize: true,
    });
  };

  const _handleSubmit = async () => {
    try {
      // if (!shouldValidate) setShouldValidate(true);
      const valid = await isValid(values);
      if (!valid) return Alert.alert('E no Valid');
      setLoading(true);
      Alert.alert('Success');
      navigation.navigate(routesNames.SIGNUP);
      // const data: any = await getVoter(
      //   convertStringKeyValuesToLowercase(values),
      // );
      // await storeData(storageKeys.ACCOUNT_DATA, {
      //   accountType: acctType.user,
      //   data,
      // });
      // setUser(data);
      // setAccountType(acctType.user);
      // showToast('success', `Welcome ${data.fullname}`);
    } catch (error: any) {
      // showToast('error', error);
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return {values, _handleChange, _handleSubmit, errors, fields, loading};
};
