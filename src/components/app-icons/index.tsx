import React, {FC, FunctionComponent, ReactElement} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {StyleProp, TextStyle} from 'react-native';

type IconProps = {
  IconTag:
    | typeof MaterialCommunityIcons
    | typeof MaterialIcons
    | typeof Ionicons
    | typeof Feather
    | typeof FontAwesome
    | typeof FontAwesome5
    | typeof AntDesign
    | typeof Entypo
    | typeof SimpleLineIcons
    | typeof Octicons
    | typeof Foundation
    | typeof Fontisto
    | typeof EvilIcons;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
};

const Icon: FunctionComponent<IconProps> = ({
  IconTag,
  name,
  color = '#fff',
  size = 24,
  style,
}): ReactElement => {
  const fontSize = 24;

  return (
    <>
      {IconTag && name && (
        <IconTag
          name={name}
          size={size || fontSize}
          color={color}
          style={style}
        />
      )}
    </>
  );
};

export const AppVectorIcons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  Fontisto,
};

export default Icon;
