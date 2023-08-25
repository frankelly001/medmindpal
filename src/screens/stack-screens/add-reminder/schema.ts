import {schema, validationSchema} from '../../../helpers/schema';

export const addReminderVS = validationSchema({
  pillName: schema.pillName,
  dosage: schema.dosage,
  timeOfDay: schema.timeOfDay,
});
