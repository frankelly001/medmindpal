import {FunctionComponent, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {wp} from '../../config/const';
import {
  FoodPill1Icon,
  FoodPill2Icon,
  FoodPill3Icon,
} from '../../constants/all-svgs';
import colors from '../../constants/colors';
import {convertToTime} from '../../helpers/convertToReadableDate';
import {createTriggerNotification} from '../../helpers/notification';
import Icon, {AppVectorIcons} from '../app-icons';
import AppText from '../app-text';
import {appTimePickerStyles} from './styles';
import {FoodPillTimePickerProps} from './type';

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
      <View style={appTimePickerStyles.container}>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            ...appTimePickerStyles.button,
            borderColor: date ? colors.secondary_1 : colors.grey_light_4,
          }}>
          <FoodPillIcon
            fill={date ? colors.secondary_1 : colors.text_2}
            height={wp(48)}
          />
        </TouchableOpacity>
        {date && (
          <View
            style={{
              ...appTimePickerStyles.dateContainer,
              ...(Items?.[align]?.position ?? {}),
            }}>
            <Icon
              IconTag={AppVectorIcons.Ionicons}
              name="notifications"
              color={colors.secondary_1}
              size={15}
              style={appTimePickerStyles.mr5}
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
          <TouchableOpacity style={appTimePickerStyles.mt10} onPress={onDelete}>
            <Icon
              IconTag={AppVectorIcons.MaterialIcons}
              name="delete"
              color={colors.error_1}
              size={25}
              style={appTimePickerStyles.mr5}
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

export default FoodPillTimePicker;
