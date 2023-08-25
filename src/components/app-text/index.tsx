import React, {FC} from 'react';
import {Text} from 'react-native';
import {fontSz} from '../../config/const';
import colors from '../../constants/colors';
import {appTextStyles} from './styles';
import {AppTextProps} from './type';

const AppText: FC<AppTextProps> = ({
  text,
  style,
  weight,
  size,
  color,
  font = 'Poppins',
  onPress,
  readonly = true,
  align,
  numberOfLines,
  lineHeight,
  disableClick,
  capitalize = false,
  textTransform = 'none',
  ...rest
}) => {
  let textAlignStyle = {};

  switch (align) {
    case 'left':
      textAlignStyle = appTextStyles.alignLeft;
      break;
    case 'center':
      textAlignStyle = appTextStyles.alignCenter;
      break;
    case 'right':
      textAlignStyle = appTextStyles.alignRight;
      break;
    default:
      textAlignStyle = {};
      break;
  }

  const textWeightStyle = {
    fontFamily: `${font}-${weight ? weight : 'Regular'}`,
  };

  const LH = fontSz(size && typeof size === 'number' ? size : 10) * 1.3;
  const textSize = {
    fontSize: fontSz(size && typeof size === 'number' ? size : 10),
    lineHeight: LH,
  };

  const textColorStyle = {color: colors[color ? color : 'black']};

  const baseTextStyle = {
    ...textWeightStyle,
    ...textColorStyle,
    ...textAlignStyle,
    ...textSize,
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      disabled={disableClick}
      style={[
        baseTextStyle,
        style,
        {
          lineHeight: lineHeight ? lineHeight : LH,
          textTransform: capitalize ? 'capitalize' : textTransform,
        },
      ]}
      {...rest}>
      {text}
    </Text>
  );
};

AppText.defaultProps = {
  text: '',
};

export default AppText;
