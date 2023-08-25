import {FunctionComponent, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AppBackBtn from '../../../components/app-back-btn';
import AppButton from '../../../components/app-button';
import Icon, {AppVectorIcons} from '../../../components/app-icons';

import AppInput from '../../../components/app-input';
import AppScreen from '../../../components/app-screen';
import AppSelectInput from '../../../components/app-select-input';
import AppText from '../../../components/app-text';
import {wp} from '../../../config/const';
import {
  FoodPill1Icon,
  FoodPill2Icon,
  FoodPill3Icon,
} from '../../../constants/all-svgs';
import colors from '../../../constants/colors';
import {ScreenProps} from '../../../constants/types';
import {convertToTime} from '../../../helpers/convertToReadableDate';
import {useFormValidation} from '../../../hooks/useFormValidation';
import {addReminderVS} from './schema';
import {addReminderFields, FoodPillTimePickerProps} from './type';

function createArrayNumList(length: number = 5, addBy: number = 1) {
  return Array.from({length}, (_, index) => index + addBy).map(el => {
    return {label: el.toString(), value: el.toString()};
  });
}

const FoodPillTimePicker: FunctionComponent<FoodPillTimePickerProps> = ({
  placeholder = 'placeholder',
  date,
  onChange = () => null,
  align = 'center',
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  const Items = {
    left: {
      position: {right: -10},
      Icon: FoodPill1Icon,
    },
    right: {
      position: {left: -10},
      Icon: FoodPill3Icon,
    },
    center: {
      position: {right: 10, left: 10},
      Icon: FoodPill2Icon,
    },
  };

  const FoodPillIcon = Items[align].Icon;

  return (
    <>
      <View
        style={{
          // width: '30%',
          alignItems: 'center',
          margin: 5,
        }}>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            backgroundColor: colors.input,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginBottom: 5,
            borderWidth: 2,
            borderColor: date ? colors.secondary_1 : colors.primary_1,
          }}>
          <FoodPillIcon
            fill={date ? colors.secondary_1 : colors.text_2}
            height={48}
          />
        </TouchableOpacity>
        {date && (
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              alignItems: 'center',
              top: -10,
              backgroundColor: colors.white,
              padding: 5,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: colors.secondary_1,
              ...(Items?.[align]?.position ?? {}),
            }}>
            <Icon
              IconTag={AppVectorIcons.Ionicons}
              name="notifications"
              color={colors.secondary_1}
              size={15}
              style={{marginRight: 5}}
            />
            <AppText
              text={convertToTime(date)}
              align="center"
              weight="Medium"
            />
          </View>
        )}
        <AppText text={placeholder} align="center" textTransform="capitalize" />
        {date && (
          <TouchableOpacity style={{marginTop: 10}} onPress={onDelete}>
            <Icon
              IconTag={AppVectorIcons.MaterialIcons}
              name="delete"
              color={colors.error_1}
              size={25}
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
        )}
      </View>
      <DatePicker
        mode="time"
        modal
        open={open}
        date={date ? date : new Date()}
        onConfirm={newDate => {
          setOpen(false);
          onChange(newDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const AddReminder: FunctionComponent<ScreenProps> = ({navigation}) => {
  const [values, setValues] = useState<{
    pillName: string;
    dosage: string;
    frequency: string;
    timeOfDay: {name: 'morning' | 'noon' | 'night'; value: Date}[];
  }>({
    pillName: '',
    dosage: '',
    frequency: '',
    timeOfDay: [],
  });

  const field1: {
    name: 'pillName';
    textContentType?: 'password';
    placeholder: string;
  } = {name: 'pillName', placeholder: 'Pill name'};

  const field2: {
    name: addReminderFields;
    textContentType?: 'password';
    placeholder?: string;
  }[] = [{name: 'dosage'}, {name: 'frequency'}];

  const field3: {
    name: 'morning' | 'noon' | 'night';
    align: 'left' | 'center' | 'right';
    textContentType?: 'password';
    placeholder?: string;
  }[] = [
    {name: 'morning', align: 'left'},
    {name: 'noon', align: 'center'},
    {name: 'night', align: 'right'},
  ];

  const {errors, isValid, validateField} = useFormValidation(addReminderVS);
  const [loading, setLoading] = useState(false);

  const handleChange = async (text: any, name: addReminderFields) => {
    setValues(values => {
      return {...values, [name]: text};
    });
    validateField({
      values: {...values, [name]: text},
      field: name,
      initialize: true,
    });
  };

  const submit = async () => {
    try {
      // if (!shouldValidate) setShouldValidate(true);
      const valid = await isValid(values);
      if (!valid) return Alert.alert('E no Valid');
      setLoading(true);
      Alert.alert('Success');
      // const data: any = await getVoter(
      //   convertStringKeyValuesToLowercase(values),
      // );
      // await storeData(storageKeys.ACCOUNT_DATA, {
      //   accountType: acctType.user,
      //   data,
      // });
      // setUser(data);
      // setAccountType(acctType.user);
      // showToast('success', `Welcome ${data.fullname}`);
    } catch (error: any) {
      // showToast('error', error);
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppScreen>
      <View style={{padding: 15}}>
        {/* <AppText text={'Add Plan'} weight="SemiBold" size={28} color="text_1" /> */}
        <View style={{marginVertical: 20}}>
          <AppText
            text={'Pills'}
            weight="Medium"
            size={15}
            color="text_1"
            style={{marginBottom: 10, marginHorizontal: 10}}
          />

          <AppInput
            placeHolder={field1.placeholder}
            value={values[field1.name]}
            onChangeText={text => handleChange(text, field1.name)}
            contentContainerStyle={{margin: 5}}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <AppText
            text={'Amount & How long?'}
            weight="Medium"
            size={15}
            color="text_1"
            style={{marginBottom: 10, marginHorizontal: 10}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {field2.map(item => (
              <View key={item.name} style={{margin: 5, flex: 1}}>
                <AppSelectInput
                  placeHolder={item?.placeholder ?? item.name}
                  value={values[item.name]}
                  data={createArrayNumList(10, 1)}
                  labelField={'lebel'}
                  valueField={'value'}
                  onChange={text => handleChange(text, item.name)}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <AppText
            text={'Food & Pills time'}
            weight="Medium"
            size={15}
            color="text_1"
            style={{marginBottom: 20, marginHorizontal: 10}}
          />
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {field3.map(item => (
              <FoodPillTimePicker
                key={item.name}
                placeholder={item.name}
                align={item.align}
                date={
                  values?.timeOfDay?.find(el => el.name == item.name)?.value
                }
                onDelete={() =>
                  handleChange(
                    values.timeOfDay.filter(el => el.name !== item.name),
                    'timeOfDay',
                  )
                }
                onChange={date =>
                  handleChange(
                    [
                      ...values.timeOfDay.filter(el => el.name !== item.name),
                      {name: item.name, value: date},
                    ],
                    'timeOfDay',
                  )
                }
              />
            ))}
          </View>
        </View>
        <AppButton
          text="Done"
          buttonColor={'secondary_1'}
          textColor="white"
          style={{margin: 5, marginVertical: 30}}
        />
      </View>
    </AppScreen>
  );
};

export default AddReminder;
