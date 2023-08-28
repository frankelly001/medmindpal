import React, {FunctionComponent, useRef, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {selectInputStyles} from './style';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DinputType} from './type';
import {fontSz} from '../../config/const';
import colors from '../../constants/colors';
import Icon, {AppVectorIcons} from '../app-icons';

const AppSelectInput: FunctionComponent<DinputType<any>> = ({
  editable,
  placeHolder = 'Placeholder Title',
  iconPressable,
  iconOnPress,
  onChange,
  value = '',
  placeholder,
  TextInputStyle,
  enableSearchInput,
  contentContainerStyle,
  placeHolderColor = colors.black,
  inputFontSize = 16,
  placeHolderFontSize = 12,
  onFocus,
  onBlur,
  borderColor = colors.grey_light_4,
  borderWidth = 2,
  labelField = 'label',
  valueField = 'value',
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const selectInputRef = useRef<any>(null);

  const focusedInputfontSize = fontSz(placeHolderFontSize / 1.17);
  const unfocusedInputfontSize = fontSz(placeHolderFontSize);
  const placeHolderTitle = placeHolder;

  const onShow = isFocus || value?.trim();
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
          borderWidth,
          borderColor: isFocus ? colors['secondary_1'] : borderColor,
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
            paddingHorizontal: 16,
            color: placeHolderColor,
            paddingRight: 30,
            textTransform: 'capitalize',
          },
          placeholderStyle,
        ]}>
        {placeHolderTitle}
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
          {opacity: value?.trim() ? 1 : 0},
        ]}
        value={value}
        onChange={({value}) => onChange(value)}
        inputSearchStyle={[selectInputStyles.inputSearchStyle]}
        iconStyle={selectInputStyles.iconStyle}
        search={enableSearchInput}
        maxHeight={300}
        showsVerticalScrollIndicator={false}
        containerStyle={{
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: colors.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
        }}
        onBlur={() => {
          isFocus && setIsFocus(false);
          onBlur;
        }}
        onFocus={() => {
          !isFocus && setIsFocus(true);
          onFocus;
        }}
        placeholder={`Select`}
        searchPlaceholder={`Search ${placeHolderTitle}...`}
        labelField={'label'}
        valueField={'value'}
        {...otherProps}
        renderItem={(item: {label: string; value: string}) => {
          return (
            <View style={selectInputStyles.item}>
              <Text
                style={[
                  selectInputStyles.textItem,
                  !item.value && selectInputStyles.noValueText,
                ]}>
                {item.label}
              </Text>
              {item.value === value && (
                <AntDesign
                  style={selectInputStyles.icon}
                  color={colors.grey_dark_4}
                  name="Safety"
                  size={20}
                />
              )}
            </View>
          );
        }}
      />

      <View style={selectInputStyles.iconPosition}>
        <Icon
          IconTag={AppVectorIcons.SimpleLineIcons}
          name="arrow-down"
          size={13}
          color={colors.black}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AppSelectInput;
