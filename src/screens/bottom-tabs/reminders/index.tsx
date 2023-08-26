import {FunctionComponent, useState} from 'react';
import {Alert, FlatList, TouchableOpacity, View} from 'react-native';
import DeleteNotice from '../../../components/app-delete-notice/Index';
import Icon, {AppVectorIcons} from '../../../components/app-icons';
import AppText from '../../../components/app-text';
import {MedTabIcon} from '../../../constants/all-svgs';
import colors from '../../../constants/colors';
import {routesNames} from '../../../constants/routes';
import {ScreenProps} from '../../../constants/types';
import {cardStyles, remindersStyles} from './styles';
import {DailyTabCardProps} from './types';

const dailyTab = {
  dosage: '3',
  frequency: '3',
  pillName: 'Paracetamol',
  timeOfDay: [
    {name: 'night', value: ' 2023-08-25T20:05:09.000Z'},
    {name: 'morning', value: '2023-08-25T09:57:42.000Z'},
    {name: 'noon', value: '2023-08-25T09:57:42.000Z'},
  ],
};

const DailyTabCard: FunctionComponent<DailyTabCardProps> = ({
  dosage = dailyTab.dosage,
  frequency = dailyTab.frequency,
  pillName = dailyTab.pillName,
  timeOfDay = dailyTab.timeOfDay,
  onEditPress,
  onDeletePress,
  onPress,
}) => {
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.subContainer1}>
        <View style={cardStyles.contentContainer1}>
          <AppText text={pillName} weight="SemiBold" size={15} color="text_1" />
          {timeOfDay.map(item => (
            <View key={item.name} style={cardStyles.contentContainer2}>
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
                    text={'10:00 AM'}
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
    </View>
  );
};

const Reminders: FunctionComponent<ScreenProps> = ({navigation}) => {
  const [showDeleteNotice, setShowsDeleteNotice] = useState(false);
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
            text={`Paracetamol`}
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
        onCancel={() => {
          setShowsDeleteNotice(false);
        }}
        onDelete={() => {
          Alert.alert('Deleted successsfully');
          setShowsDeleteNotice(false);
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={remindersStyles.listContainer}
        data={[1, 2, 3, 4]}
        keyExtractor={el => el.toString()}
        renderItem={({item}) => (
          <DailyTabCard
            onDeletePress={() => setShowsDeleteNotice(true)}
            onEditPress={() => navigation.navigate(routesNames.EDIT_REMINDER)}
          />
        )}
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
