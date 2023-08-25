import {FunctionComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import AppButton from '../../../components/app-button';
import Icon, {AppVectorIcons} from '../../../components/app-icons';
import AppScreen from '../../../components/app-screen';
import AppText from '../../../components/app-text';
import {screenHeight, screenWidth} from '../../../config/const';
import {BG1} from '../../../constants/all-svgs';
import {routesNames} from '../../../constants/routes';
import {ScreenProps} from '../../../constants/types';
import {onboardingStyle} from './styles';

const Onboarding: FunctionComponent<ScreenProps> = ({navigation}) => {
  return (
    <View style={onboardingStyle.container}>
      <View style={onboardingStyle.svgBg}>
        <BG1 width={screenWidth} height={screenHeight} />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 20, flex: 1}}>
          <View style={{marginTop: 50, flex: 1}}>
            <AppText
              text={'Welcome to'}
              size={26}
              color="primary_1"
              weight="Medium"
              align="center"
            />
            <AppText
              text={'MedMindPal'}
              size={36}
              color="primary_1"
              weight="Light"
              style={{marginVertical: 5}}
              align="center"
            />
            <AppText
              text={
                'Never Miss a pill again. Staying on top of your health routine is our priority'
              }
              size={16}
              color="primary_1"
              weight="Regular"
              align="center"
            />
          </View>
          <AppButton
            text="GET STARTED"
            onPress={() => navigation.replace(routesNames.AUTH_TYPE)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Onboarding;
