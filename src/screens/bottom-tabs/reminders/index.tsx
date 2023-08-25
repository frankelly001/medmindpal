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

const DailyTabCard = () => {
  return (
    <View style={cardStyles.container}>
      <MedTabIcon />
      <View style={cardStyles.contentContainer1}>
        <AppText
          text={'Oxycodane'}
          weight="SemiBold"
          size={15}
          color="text_1"
        />
        <View style={cardStyles.contentContainer2}>
          <AppText
            text={'10:00 AM'}
            weight="SemiBold"
            size={13}
            color="grey_dark"
          />
          <View style={cardStyles.seperator} />
          <AppText
            text={'Completed'}
            weight="SemiBold"
            size={13}
            color="grey_dark"
          />
        </View>
      </View>
      <Icon
        IconTag={AppVectorIcons.MaterialIcons}
        name="keyboard-arrow-right"
        color={colors.grey_dark}
        size={30}
      />
    </View>
  );
};

const Reminders: FunctionComponent<ScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={el => el.toString()}
        renderItem={({item}) => <DailyTabCard />}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(routesNames.ADD_REMINDER)}
        style={{
          padding: 20,
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
