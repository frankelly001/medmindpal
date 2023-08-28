import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showToast} from '../../../../components/app-toast';
import {useFormValidation} from '../../../../hooks/useFormValidation';
import {authReset, signin} from '../../../../redux/auth/authSlice';
import {storeState} from '../../../../redux/storeSliceType';
import {setUser} from '../../../../redux/user/userSlice';
import {siginVS} from './schema';
import {signinFields} from './types';

export const useSignin = () => {
  const [values, setValues] = useState<{[key in signinFields]: string}>({
    email: 'Frank@gmail.com',
    password: 'Frank12',
  });

  const fields: {[key in 'name']: signinFields}[] = [
    {name: 'email'},
    {name: 'password'},
  ];

  const {errors, isValid, validateField} = useFormValidation(siginVS);
  const dispatch: any = useDispatch();

  const {signinFailed, signinSucess, message, loading, signinData} =
    useSelector((state: storeState) => state.authReducer);

  const {user} = useSelector((state: storeState) => state.userReducer);

  useEffect(() => {
    if (signinSucess) {
      dispatch(setUser(signinData.profile));
    }
    if (message) showToast(signinSucess ? 'success' : 'error', message);
    return () => dispatch(authReset());
  }, [signinFailed, signinSucess, message]);

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
    const valid = await isValid(values);
    if (!valid) return;
    const {email, password} = values;
    dispatch(signin({email, password}));
  };

  return {values, _handleChange, _handleSubmit, errors, fields, loading};
};
