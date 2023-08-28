import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showToast} from '../../../../components/app-toast';
import {routesNames} from '../../../../constants/routes';
import {navigationProps} from '../../../../constants/types';
import {useFormValidation} from '../../../../hooks/useFormValidation';
import {authReset, signup} from '../../../../redux/auth/authSlice';
import {storeState} from '../../../../redux/storeSliceType';
import {sigupVS} from './schema';
import {signupFields} from './types';

export const useSignup = () => {
  const [values, setValues] = useState<{
    [key in signupFields]: string;
  }>({
    fullname: 'Franklyn',
    email: 'Frank@gmail.com',
    password: 'Frank12',
    confirmPassword: 'Frank12',
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
      name: 'confirmPassword',
      placeholder: 'Confrim Password',
      textContentType: 'password',
    },
  ];

  const dispatch: any = useDispatch();

  const {errors, isValid, validateField} = useFormValidation(sigupVS);
  const {signupFailed, signupSucess, message, loading} = useSelector(
    (state: storeState) => state.authReducer,
  );

  const navigation = useNavigation() as navigationProps;

  useEffect(() => {
    if (signupSucess) {
      navigation.navigate(routesNames.SIGNIN);
    }
    if (message) showToast(signupSucess ? 'success' : 'error', message);
    return () => dispatch(authReset());
  }, [signupFailed, signupSucess]);

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
    const valid = await isValid(values);
    if (!valid) return;
    const {fullname, email, password} = values;
    dispatch(signup({fullname, email, password}));
  };

  return {_handkeSubmit, _handleChange, errors, values, loading, fields};
};
