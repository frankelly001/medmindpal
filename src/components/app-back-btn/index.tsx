import {useNavigation} from '@react-navigation/native';
import {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import {navigationProps} from '../../constants/types';
import Icon, {AppVectorIcons} from '../app-icons';
import {appBackBtnStyles} from './styles';

const AppBackBtn: FunctionComponent = () => {
  const navigation = useNavigation() as navigationProps;
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={appBackBtnStyles.container}>
      <Icon
        IconTag={AppVectorIcons.AntDesign}
        name="arrowleft"
        size={25}
        color={colors.black}
      />
    </TouchableOpacity>
  );
};

export default AppBackBtn;
