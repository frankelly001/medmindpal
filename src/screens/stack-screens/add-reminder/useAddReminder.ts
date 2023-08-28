import {RepeatFrequency} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodPillTimePickerAlign} from '../../../components/app-time-picker/type';
import {showToast} from '../../../components/app-toast';
import {createArrayNumList} from '../../../helpers/create';
import {
  createTriggerNotification,
  repeatFrequencyData,
} from '../../../helpers/notification';
import {generateUniqueId} from '../../../helpers/generateUniqe';
import {useFormValidation} from '../../../hooks/useFormValidation';
import {createReminder} from '../../../redux/user/userSlice';
import {addReminderVS} from './schema';
import {addReminderFields, timeOfDay} from './type';
import {storeState} from '../../../redux/storeSliceType';
import {convertToTime} from '../../../helpers/convertToReadableDate';

export const useAddReminder = () => {
  const [values, setValues] = useState<{
    pillName: string;
    dosage: string;
    repeatFrequency: string;
    timeOfDay: {name: timeOfDay; value: Date}[];
  }>({
    pillName: '',
    dosage: '',
    repeatFrequency: '',
    timeOfDay: [],
  });
  const {errors, isValid, validateField} = useFormValidation(addReminderVS);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector((state: storeState) => state.userReducer);

  const field1: {
    name: 'pillName';

    placeholder: string;
  } = {name: 'pillName', placeholder: 'Pill name'};

  const field2: {
    name: addReminderFields;

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

  const _handleChange = async (text: any, name: addReminderFields) => {
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
    try {
      const valid = await isValid(values);
      if (!valid) return;
      setLoading(true);
      const id: any = generateUniqueId();
      const timeOfDayTriggeredAlarm: {
        id: string;
        name: timeOfDay;
        value: Date;
      }[] = [];
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

      const payload = {
        ...values,
        timeOfDay: timeOfDayTriggeredAlarm,
      };
      dispatch(createReminder({id, ...payload}));
      showToast('success', `Reminder created`);
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
    _handleSubmit,
    _handleChange,
  };
};
