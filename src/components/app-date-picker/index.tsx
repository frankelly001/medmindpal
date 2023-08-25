import {FunctionComponent, useState} from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {convertToReadableDate} from '../../helpers/convertToReadableDate';
import AppBtnInput from '../app-btn-input';
import ErrorMessage from '../error-message';
import {AppDatePickerProps} from './type';

const AppDatePicker: FunctionComponent<AppDatePickerProps> = ({
  placeholder,
  onChange = () => null,
  style,
  date,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View
        style={{
          marginVertical: 5,
          width: '49%',
          ...style,
        }}>
        <AppBtnInput
          label={placeholder}
          value={date ? convertToReadableDate(date) : undefined}
          labelFontSize={12}
          onPress={() => setOpen(true)}
        />
        {/* <ErrorMessage error={!!error} message={errorMessage} /> */}
      </View>
      <DatePicker
        mode="date"
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

export default AppDatePicker;
