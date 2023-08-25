import * as Yup from 'yup';
export const schema = {
  fullname: Yup.string().required().min(3).label('Fullname'),
  pillName: Yup.string().required().min(3).label('Pill name'),
  email: Yup.string().required().email().label('Email'),
  defaultPassword: Yup.string().trim().required('Please Enter your Password'),
  password: Yup.string()
    .required(`Please Enter your Password`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase and One Number',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], `Confirm password must match password`)
    .required()
    .label('Confirm Password'),

  dosage: Yup.string()
    .required()
    .min(1)
    .max(2)
    .label('Phone')
    .matches(/^[0-9]+$/, 'Dosage must be only digits'),
  days: Yup.string()
    .required()
    .min(1)
    .max(2)
    .label('Phone')
    .matches(/^[0-9]+$/, 'Days must be only digits'),

  timeOfDay: Yup.array().min(1, 'Please select at least one time of the Day'),
};

export const validationSchema = (schema: Yup.AnyObject) =>
  Yup.object().shape(schema);
