import {schema, validationSchema} from '../../../../helpers/schema';

export const sigupVS = validationSchema({
  fullname: schema.fullname,
  email: schema.email,
  password: schema.password,
  confirmPassword: schema.confirmPassword,
});
