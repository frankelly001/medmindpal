import React, {FunctionComponent, useRef, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {selectInputStyles} from './style';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DinputType} from './type';
import {fontSz} from '../../config/const';
import colors from '../../constants/colors';
import {ArrowDownIcon} from '../../constants/all-svgs';

const AppSelectInput: FunctionComponent<DinputType<any>> = ({
  editable,
  placeHolder = 'Placeholder Title',
  LeftView: suffixIcon = <ArrowDownIcon stroke="#9CA3AF" />,
  iconPressable,
  iconOnPress,
  onChange,
  value,
  TextInputStyle,
  enableSearchInput,
  contentContainerStyle,
  placeHolderColor = colors.text_1,
  inputFontSize = 16,
  placeHolderFontSize = 14,
  onFocus,
  onBlur,
  labelField = 'label',
  valueField = 'value',
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const selectInputRef = useRef<any>(null);

  const focusedInputfontSize = fontSz(placeHolderFontSize / 1.17);
  const unfocusedInputfontSize = fontSz(placeHolderFontSize);

  const onShow = isFocus || value.trim();
  const placeholderStyle = useAnimatedStyle(() => {
    if (onShow)
      return {
        fontSize: withSpring(focusedInputfontSize),
        lineHeight: withSpring(focusedInputfontSize * 1.3),
        transform: [{translateY: withSpring(0)}],
      };
    return {
      fontSize: withSpring(unfocusedInputfontSize),
      lineHeight: withSpring(unfocusedInputfontSize * 1.3),
      transform: [{translateY: withSpring(15)}],
    };
  }, [isFocus]);

  return (
    <TouchableOpacity
      style={[
        {
          ...selectInputStyles.container,
        },
        contentContainerStyle,
      ]}
      activeOpacity={1}
      onPress={() => {
        !isFocus && setIsFocus(true);
        selectInputRef.current?.open();
      }}>
      <Animated.Text
        style={[
          {
            ...selectInputStyles.fontFamily,
            paddingHorizontal: 16,
            color: placeHolderColor,
            ...(suffixIcon && {paddingRight: 30}),
          },
          placeholderStyle,
        ]}>
        {placeHolder}
      </Animated.Text>
      <Dropdown
        ref={selectInputRef}
        style={selectInputStyles.dropdown}
        placeholderStyle={[
          selectInputStyles.placeholderStyle,
          {opacity: isFocus ? 1 : 0},
        ]}
        selectedTextStyle={[
          selectInputStyles.selectedTextStyle,
          {opacity: value.trim() ? 1 : 0},
        ]}
        value={value}
        onChange={({value}) => onChange(value)}
        inputSearchStyle={[selectInputStyles.inputSearchStyle]}
        iconStyle={selectInputStyles.iconStyle}
        search={enableSearchInput}
        maxHeight={300}
        containerStyle={{
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: colors.input,
        }}
        onBlur={() => {
          isFocus && setIsFocus(false);
          onBlur;
        }}
        onFocus={() => {
          !isFocus && setIsFocus(true);
          onFocus;
        }}
        placeholder={`Select ${placeHolder}`}
        searchPlaceholder={`Search ${placeHolder}...`}
        labelField={labelField}
        valueField={valueField}
        {...otherProps}
        renderItem={(item: {label: string; value: string}) => {
          return (
            <View style={selectInputStyles.item}>
              <Text
                style={[
                  selectInputStyles.textItem,
                  !item.value && {
                    color: colors.error_2,
                    textTransform: 'none',
                  },
                ]}>
                {item.label}
              </Text>
              {item.value === value && (
                <AntDesign
                  style={selectInputStyles.icon}
                  color={colors.text_1}
                  name="Safety"
                  size={20}
                />
              )}
            </View>
          );
        }}
      />

      <View style={selectInputStyles.iconPosition}>{suffixIcon}</View>
    </TouchableOpacity>
  );
};

export default AppSelectInput;
