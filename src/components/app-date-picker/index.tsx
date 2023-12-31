import {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {convertToTime} from '../../helpers/convertToReadableDate';
import AppBtnInput from '../app-btn-input';
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
          value={date ? convertToTime(date) : undefined}
          labelFontSize={12}
          onPress={() => setOpen(true)}
        />
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
