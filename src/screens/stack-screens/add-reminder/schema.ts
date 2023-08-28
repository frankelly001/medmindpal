import {schema, validationSchema} from '../../../helpers/schema';

export const addReminderVS = validationSchema({
  pillName: schema.pillName,
  dosage: schema.dosage,
  repeatFrequency: schema.repeatFrequency,
  timeOfDay: schema.timeOfDay,
});
