import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FoodPillTimePickerAlign} from '../../../components/app-time-picker/type';
import {showToast} from '../../../components/app-toast';
import {createArrayNumList} from '../../../helpers/createArrayNumList';
import {
  cancelAllTriggeredNotification,
  createTriggerNotification,
  repeatFrequencyData,
} from '../../../helpers/notification';
import {generateUniqueId} from '../../../helpers/generateUniqe';
import {useFormValidation} from '../../../hooks/useFormValidation';
import {deleteReminder, editReminder} from '../../../redux/user/userSlice';
import {editReminderVS} from './schema';
import {editReminderFields, timeOfDay} from './type';
import {storeState} from '../../../redux/storeSliceType';
import {convertToTime} from '../../../helpers/convertToReadableDate';
import {reminder} from '../../../redux/user/type';
import {getChangedProperties} from '../../../helpers/getChangedProperties';

export const useEditReminder = (reminder: reminder) => {
  const initialValues = {
    pillName: reminder?.pillName ?? '',
    dosage: reminder?.dosage ?? '',
    repeatFrequency: reminder?.repeatFrequency ?? '',
    timeOfDay:
      reminder?.timeOfDay?.map(el => {
        return {...el, value: new Date(el.value)};
      }) ?? [],
  };

  const [values, setValues] = useState<{
    pillName: string;
    dosage: string;
    repeatFrequency: string;
    timeOfDay: {id: string; name: timeOfDay; value: Date}[];
  }>(initialValues);
  const {errors, isValid, validateField} = useFormValidation(editReminderVS);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector((state: storeState) => state.userReducer);

  const field1: {
    name: 'pillName';

    placeholder: string;
  } = {name: 'pillName', placeholder: 'Pill name'};

  const field2: {
    name: editReminderFields;

    placeholder?: string;
    data: any[];
  }[] = [
    {name: 'dosage', data: createArrayNumList(10, 1)},
    {
      name: 'repeatFrequency',
      placeholder: 'Repeat frequency',
      data: repeatFrequencyData,
    },
  ];

  const field3: {
    name: 'timeOfDay';
    fields: {name: timeOfDay; align: FoodPillTimePickerAlign}[];

    placeholder?: string;
  } = {
    name: 'timeOfDay',
    fields: [
      {name: 'morning', align: 'left'},
      {name: 'noon', align: 'center'},
      {name: 'night', align: 'right'},
    ],
  };

  const _handleChange = async (text: any, name: editReminderFields) => {
    setValues(values => {
      return {...values, [name]: text};
    });
    validateField({
      values: {...values, [name]: text},
      field: name,
      initialize: true,
    });
  };

  const valuesChanged = getChangedProperties(initialValues, values);

  const _handleSubmit = async () => {
    try {
      const valid = await isValid(values);
      if (!valid && !valuesChanged) return;

      setLoading(true);
      const timeOfDayTriggeredAlarm: {
        id: string;
        name: timeOfDay;
        value: Date;
      }[] = [];

      dispatch(deleteReminder(reminder?.id ?? ''));
      const notificationIds = reminder?.timeOfDay.map(el => el.id);
      await cancelAllTriggeredNotification(notificationIds);

      for (let i = 0; i < values.timeOfDay.length; i++) {
        try {
          const id: any = await generateUniqueId();
          await createTriggerNotification({
            id,
            title: 'Medmindpal Reminder',
            subtitle: `${values.pillName} (${convertToTime(
              values.timeOfDay[i].value.getTime(),
            )}), Dosage (${values.dosage})`,
            message: `Hello ${
              user?.fullname.split(' ')[0]
            }, its time for your medication`,
            time: values.timeOfDay[i].value.getTime(),
            repeatFrequency: +values.repeatFrequency,
          });

          timeOfDayTriggeredAlarm.push({...values.timeOfDay[i], id});
        } catch (error: any) {
          showToast('error', 'Something went wrong');
        }
      }

      const payload: reminder = {
        id: reminder.id,
        ...values,
        timeOfDay: timeOfDayTriggeredAlarm,
      };
      dispatch(editReminder(payload));
      showToast('success', `Reminder updated successfully`);
      navigation.goBack();
    } catch (error: any) {
      showToast('error', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    field1,
    field2,
    field3,
    errors,
    values,
    loading,
    valuesChanged,
    _handleSubmit,
    _handleChange,
  };
};
