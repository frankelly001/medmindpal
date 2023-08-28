import {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import Icon, {AppVectorIcons} from '../../../components/app-icons';
import AppScreen from '../../../components/app-screen';
import AppText from '../../../components/app-text';
import {showToast} from '../../../components/app-toast';
import {hp, wp} from '../../../config/const';
import {BannerIcon, MedTabIcon} from '../../../constants/all-svgs';
import colors from '../../../constants/colors';
import {storeState} from '../../../redux/storeSliceType';
import {cardStyles, homestyles} from './styles';

const WelcomeCard: FunctionComponent<{welcomeName?: string}> = ({
  welcomeName,
}) => {
  return (
    <View style={homestyles.welcomeCardContainer}>
      <AppText text={'Hello,'} weight="SemiBold" size={28} />
      <AppText text={welcomeName} weight="Regular" size={28} />
      <View style={homestyles.planCardContainer}>
        <View style={homestyles.planCardContent}>
          <View>
            <AppText
              text={'Your Plan for today'}
              weight="SemiBold"
              size={18}
              style={homestyles.mb10}
            />

            <AppText text={'1 of 4 Completed'} weight="Regular" size={12} />
          </View>
          <TouchableOpacity style={homestyles.showMoreBtn}>
            <AppText
              text={'Show More'}
              weight="SemiBold"
              size={12}
              color="brown_1"
            />
          </TouchableOpacity>
        </View>
        <View style={homestyles.bannerContainer}>
          <View style={homestyles.bannerSubContainer}>
            <BannerIcon width={wp(230)} height={wp(230)} />
          </View>
        </View>
      </View>
    </View>
  );
};

const DailyTabCard = () => {
  return (
    <View style={cardStyles.container}>
      <MedTabIcon fill={colors.text_2} />
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

const Home: FunctionComponent = () => {
  const {user} = useSelector((state: storeState) => state.userReducer);
  return (
    <AppScreen>
      <View style={homestyles.container}>
        <WelcomeCard welcomeName={user?.fullname?.split(' ')[0]} />

        <View style={homestyles.listHeaderContainer}>
          <AppText text={'Daily Review'} weight="Medium" size={18} />
          <AppText
            text={'Sell All'}
            weight="Regular"
            size={12}
            color="grey_dark_3"
            onPress={() => showToast('info', 'See All')}
          />
        </View>

        {[1, 2, 3, 4, 5, 6, 7].map(el => (
          <DailyTabCard key={el} />
        ))}
      </View>
    </AppScreen>
  );
};

export default Home;
