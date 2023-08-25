import {FunctionComponent} from 'react';
import {Alert, FlatList, TouchableOpacity, View} from 'react-native';
import Icon, {AppVectorIcons} from '../../../components/app-icons';
import AppScreen from '../../../components/app-screen';
import AppText from '../../../components/app-text';
import {hp, wp} from '../../../config/const';
import {BannerIcon, MedTabIcon} from '../../../constants/all-svgs';
import colors from '../../../constants/colors';
import {routesNames} from '../../../constants/routes';
import {ScreenProps} from '../../../constants/types';
import {cardStyles, remindersStyles} from './styles';

type timeOfDay = 'night' | 'morning' | 'noon';

type DailyTabCardProps = {
  dosage?: string;
  frequency?: string;
  pillName?: string;
  timeOfDay?: {name: timeOfDay; value: Date}[];
  onPress?: () => void;
  onEditPress?: () => void;
  onDeletePress?: () => void;
};

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
        <MedTabIcon fill={colors.secondary_1} />
        <View style={cardStyles.contentContainer1}>
          <AppText text={pillName} weight="SemiBold" size={18} color="text_1" />
          {timeOfDay.map(item => (
            <View key={item.name} style={cardStyles.contentContainer2}>
              <AppText
                text={[
                  <AppText
                    key={0}
                    text={`${item.name}:  `}
                    weight="SemiBold"
                    size={13}
                    textTransform="capitalize"
                    color="black"
                  />,
                  <AppText
                    key={1}
                    text={'10:00 AM'}
                    weight="SemiBold"
                    size={13}
                    color="grey_dark"
                  />,
                ]}
              />
            </View>
          ))}
        </View>
        <View style={{height: '100%'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <AppText
              text={`${dosage} pills`}
              weight="SemiBold"
              size={13}
              color="grey_dark"
            />
            <AppText
              text={`${frequency} days`}
              weight="SemiBold"
              size={13}
              color="grey_dark"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderColor: colors.primary_1,
          paddingVertical: 10,
        }}>
        {[
          {title: 'Started', value: '20 May 2023'},
          {title: 'Ending', value: '20 June 2023'},
        ].map(el => (
          <AppText
            text={[
              <AppText
                key={0}
                text={`${el.title}:  `}
                weight="SemiBold"
                size={11}
                textTransform="capitalize"
                color="black"
              />,
              <AppText
                key={1}
                text={el.value}
                weight="SemiBold"
                size={11}
                color="grey_dark"
              />,
            ]}
          />
        ))}
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.secondary_1_light,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
          }}>
          <Icon
            IconTag={AppVectorIcons.MaterialIcons}
            name="edit-square"
            color={colors.white}
            size={25}
          />
        </TouchableOpacity>
        <View style={{width: 1}} />
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.secondary_1_light,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
          }}>
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
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 20, paddingBottom: 100}}
        data={[1, 2, 3, 4]}
        keyExtractor={el => el.toString()}
        renderItem={({item}) => <DailyTabCard />}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(routesNames.ADD_REMINDER)}
        style={{
          padding: 15,
          backgroundColor: colors.secondary_1,
          position: 'absolute',
          borderRadius: 50,
          bottom: 20,
          right: 20,
        }}>
        <Icon
          IconTag={AppVectorIcons.Fontisto}
          name="plus-a"
          color={colors.white}
          // size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Reminders;
