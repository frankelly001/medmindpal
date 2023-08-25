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
import {addReminderStyles} from './styles';

const EditReminder: FunctionComponent<ScreenProps> = ({navigation}) => {
  return <View style={{flex: 1, padding: 20}}></View>;
};

export default EditReminder;
