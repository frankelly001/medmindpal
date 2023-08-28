import {FunctionComponent} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import DeleteNotice from '../../../components/app-delete-notice/Index';
import Icon, {AppVectorIcons} from '../../../components/app-icons';
import AppText from '../../../components/app-text';
import {MedTabIcon} from '../../../constants/all-svgs';
import colors from '../../../constants/colors';
import {routesNames} from '../../../constants/routes';
import {ScreenProps} from '../../../constants/types';
import {convertToTime} from '../../../helpers/convertToReadableDate';
import {repeatFrequency} from '../../../helpers/notification';
import {reverseLookup} from '../../../helpers/reverseLookup';
import {cardStyles, remindersStyles} from './styles';
import {DailyTabCardProps} from './types';
import {useReminders} from './useReminders';

const DailyTabCard: FunctionComponent<DailyTabCardProps> = ({
  dosage,
  repeatFrequency: frequencyRepeat,
  pillName,
  timeOfDay = [],
  onEditPress,
  onDeletePress,
  onPress,
}) => {
  return (
    <TouchableOpacity style={cardStyles.container} onPress={onPress}>
      <View style={cardStyles.subContainer1}>
        <View style={cardStyles.contentContainer1}>
          <AppText text={pillName} weight="SemiBold" size={15} color="text_1" />
          {timeOfDay.map(item => (
            <View key={item.id} style={cardStyles.contentContainer2}>
              <AppText
                text={[
                  <AppText
                    key={0}
                    text={`${item.name}:  `}
                    weight="SemiBold"
                    size={11}
                    textTransform="capitalize"
                    color="black"
                  />,
                  <AppText
                    key={1}
                    text={convertToTime(item.value)}
                    weight="SemiBold"
                    size={11}
                    color="grey_dark"
                  />,
                ]}
              />
            </View>
          ))}
        </View>
        <View style={cardStyles.dosageContainer}>
          <View style={cardStyles.dosageSubContainer}>
            <MedTabIcon fill={colors.secondary_1} />
            <AppText
              text={`${dosage} pills`}
              weight="SemiBold"
              size={12}
              color="grey_dark"
            />
            {frequencyRepeat && (
              <AppText
                text={reverseLookup(repeatFrequency, +frequencyRepeat)}
                weight="SemiBold"
                size={12}
                color="grey_dark"
              />
            )}
          </View>
        </View>
      </View>

      <View style={cardStyles.btnContainer}>
        <TouchableOpacity onPress={onEditPress} style={cardStyles.btn}>
          <Icon
            IconTag={AppVectorIcons.MaterialIcons}
            name="edit-square"
            color={colors.white}
            size={25}
          />
        </TouchableOpacity>
        <View style={cardStyles.seperator} />
        <TouchableOpacity onPress={onDeletePress} style={cardStyles.btn}>
          <Icon
            IconTag={AppVectorIcons.MaterialIcons}
            name="delete"
            color={colors.white}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const Reminders: FunctionComponent<ScreenProps> = ({navigation}) => {
  const {
    _handleCancel,
    _handleConfirmDelete,
    _handleShowDeleteModal,
    reminders,
    showDeleteNotice,
    deleteReminderDetails,
  } = useReminders();

  return (
    <View style={remindersStyles.container}>
      <DeleteNotice
        noticeLabel={[
          <AppText
            key={0}
            text={'Are you sure, you want to delete Voter: '}
            size={14}
            style={remindersStyles.delNoticeText}
          />,
          <AppText
            key={1}
            text={deleteReminderDetails?.pillName}
            textTransform="capitalize"
            size={14}
            weight={'Medium'}
            style={remindersStyles.delNoticeText}
          />,
          <AppText
            key={2}
            text={'?'}
            size={14}
            style={remindersStyles.delNoticeText}
          />,
        ]}
        visible={showDeleteNotice}
        onCancel={_handleCancel}
        onDelete={_handleConfirmDelete}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={remindersStyles.listContainer}
        data={reminders}
        keyExtractor={el => el.id}
        renderItem={({item}) => {
          const stringifiedReminder: any = JSON.stringify(item);
          return (
            <DailyTabCard
              dosage={item.dosage}
              pillName={item.pillName}
              timeOfDay={item.timeOfDay}
              repeatFrequency={item.repeatFrequency}
              onDeletePress={() =>
                _handleShowDeleteModal({
                  pillName: item.pillName,
                  reminderId: item.id,
                  timeOfDay: item.timeOfDay,
                })
              }
              onEditPress={() =>
                navigation.navigate(
                  routesNames.EDIT_REMINDER,
                  stringifiedReminder,
                )
              }
            />
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(routesNames.ADD_REMINDER)}
        style={remindersStyles.floatBtn}>
        <Icon
          IconTag={AppVectorIcons.Fontisto}
          name="plus-a"
          color={colors.white}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Reminders;
