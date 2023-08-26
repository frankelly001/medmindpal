import {FunctionComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import AppButton from '../../../components/app-button';
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
      <SafeAreaView style={onboardingStyle.safeArea}>
        <View style={onboardingStyle.contentContainer}>
          <View style={onboardingStyle.introContainer}>
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
              style={onboardingStyle.prodName}
              align="center"
            />
            <AppText
              text={
                'Never miss a pill again. Staying on top of your Health routine is our priority'
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
