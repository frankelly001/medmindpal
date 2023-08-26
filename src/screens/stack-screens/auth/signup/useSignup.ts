import {useState} from 'react';
import {Alert} from 'react-native';
import {useFormValidation} from '../../../../hooks/useFormValidation';
import {sigupVS} from './schema';
import {signupFields} from './types';

export const useSignup = () => {
  const [values, setValues] = useState<{
    [key in signupFields]: string;
  }>({
    fullname: '',
    email: '',
    password: '',
    confrimPassword: '',
  });

  const fields: {
    name: signupFields;
    textContentType?: 'password';
    placeholder?: string;
  }[] = [
    {name: 'fullname'},
    {name: 'email'},
    {name: 'password', textContentType: 'password'},
    {
      name: 'confrimPassword',
      placeholder: 'Confrim Password',
      textContentType: 'password',
    },
  ];

  const {errors, isValid, validateField} = useFormValidation(sigupVS);
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

  const _handkeSubmit = async () => {
    try {
      // if (!shouldValidate) setShouldValidate(true);
      const valid = await isValid(values);
      if (!valid) return Alert.alert('E no Valid');
      setLoading(true);
      Alert.alert('Success');
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

  return {_handkeSubmit, _handleChange, errors, values, loading, fields};
};
