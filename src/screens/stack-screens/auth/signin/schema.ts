import {schema, validationSchema} from '../../../../helpers/schema';

export const siginVS = validationSchema({
  email: schema.email,
  password: schema.defaultPassword,
});
