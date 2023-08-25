import React, {FunctionComponent} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {fontSz} from '../../config/const';
import colors from '../../constants/colors';
import AppText from '../app-text';
import {inputBtnStyles} from './style';
import {BtnInputType} from './type';

const AppBtnInput: FunctionComponent<BtnInputType> = ({
  LabelIcon,
  RightSuffixIcon,
  label = 'Credit or Debit Card',
  onPress,
  style,
  value,
  labelFontSize = 14,
  valueFontSize = 16,
}) => {
  const focusedInputfontSize = fontSz(labelFontSize / 1.17);
  const unfocusedInputfontSize = fontSz(labelFontSize);

  const placeholderStyle = useAnimatedStyle(() => {
    if (value)
      return {
        fontSize: withSpring(focusedInputfontSize),
        lineHeight: withSpring(focusedInputfontSize * 1.3),
      };
    return {
      fontSize: withSpring(unfocusedInputfontSize),
      lineHeight: withSpring(unfocusedInputfontSize * 1.3),
    };
  }, [value]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {...inputBtnStyles.container, borderColor: colors.grey_light_4},
        style,
      ]}>
      <View style={{flex: 1}}>
        <Animated.Text
          style={[
            {
              ...inputBtnStyles.fontFamily,
              color: colors.text_1,
            },
            placeholderStyle,
          ]}>
          {label}
        </Animated.Text>
        {LabelIcon && <LabelIcon />}
        {value && (
          <AppText
            text={value}
            size={valueFontSize}
            color={'grey_dark_3'}
            style={{marginTop: 5}}
          />
        )}
      </View>
      {RightSuffixIcon && <RightSuffixIcon />}
    </TouchableOpacity>
  );
};

export default AppBtnInput;
