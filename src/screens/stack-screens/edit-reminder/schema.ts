import {schema, validationSchema} from '../../../helpers/schema';

export const editReminderVS = validationSchema({
  pillName: schema.pillName,
  dosage: schema.dosage,
  timeOfDay: schema.timeOfDay,
});
