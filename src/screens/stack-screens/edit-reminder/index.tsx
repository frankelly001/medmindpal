import {FunctionComponent} from 'react';
import {View} from 'react-native';
import AppButton from '../../../components/app-button';
import AppInput from '../../../components/app-input';
import AppScreen from '../../../components/app-screen';
import AppSelectInput from '../../../components/app-select-input';
import AppText from '../../../components/app-text';
import FoodPillTimePicker from '../../../components/app-time-picker';
import ErrorMessage from '../../../components/error-message';
import {ScreenProps} from '../../../constants/types';
import {editReminderStyles} from './styles';
import {useEditReminder} from './useEditReminder';

const EditReminder: FunctionComponent<ScreenProps> = ({navigation, route}) => {
  const {
    _handleChange,
    _handleSubmit,
    errors,
    field1,
    field2,
    field3,
    values,
    valuesChanged,
  } = useEditReminder(JSON.parse(route?.params));

  return (
    <AppScreen>
      <View style={editReminderStyles.container}>
        <View style={editReminderStyles.allFieldContainer}>
          <AppText
            text={'Pills'}
            weight="Medium"
            size={15}
            color="text_1"
            style={editReminderStyles.allFieldLabel}
          />
          <View key={field1.name} style={editReminderStyles.allField}>
            <AppInput
              placeHolder={field1.placeholder}
              value={values[field1.name]}
              onChangeText={text => _handleChange(text, field1.name)}
            />
            <ErrorMessage
              error={!!errors?.[field1.name]}
              message={errors?.[field1.name]?.message}
            />
          </View>
        </View>
        <View style={editReminderStyles.allFieldContainer}>
          <AppText
            text={'Amount & How long?'}
            weight="Medium"
            size={15}
            color="text_1"
            style={editReminderStyles.allFieldLabel}
          />
          <View style={editReminderStyles.field2}>
            {field2.map(item => (
              <View key={item.name} style={editReminderStyles.allField}>
                <AppSelectInput
                  placeHolder={item?.placeholder ?? item.name}
                  value={values[item.name]}
                  data={item.data}
                  labelField={'lebel'}
                  valueField={'value'}
                  onChange={text => _handleChange(text, item.name)}
                />

                <ErrorMessage
                  error={!!errors?.[item.name]}
                  message={errors?.[item.name]?.message}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={editReminderStyles.allFieldContainer}>
          <AppText
            text={'Food & Pills time'}
            weight="Medium"
            size={15}
            color="text_1"
            style={editReminderStyles.allFieldLabel}
          />
          <View style={editReminderStyles.filed3}>
            {field3.fields.map(item => (
              <FoodPillTimePicker
                key={item.name}
                placeholder={item.name}
                align={item.align}
                date={
                  values?.[field3.name]?.find(el => el?.name == item?.name)
                    ?.value
                }
                onDelete={() =>
                  _handleChange(
                    values?.[field3.name].filter(el => el.name !== item.name),
                    field3.name,
                  )
                }
                onChange={date =>
                  _handleChange(
                    [
                      ...values?.[field3.name].filter(
                        el => el.name !== item.name,
                      ),
                      {name: item.name, value: date},
                    ],
                    field3.name,
                  )
                }
              />
            ))}
          </View>

          <ErrorMessage
            error={!!errors?.[field3.name]}
            message={errors?.[field3.name]?.message}
            align="center"
          />
        </View>
        <AppButton
          text="Done"
          disabled={!valuesChanged}
          buttonColor={'secondary_1'}
          textColor="white"
          style={editReminderStyles.submit}
          onPress={_handleSubmit}
        />
      </View>
    </AppScreen>
  );
};

export default EditReminder;
