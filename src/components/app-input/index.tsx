import React, {FunctionComponent, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {SvgProps} from 'react-native-svg';
import {fontSz, hp, TEXT_SIZE_TYPE} from '../../config/const';
import colors from '../../constants/colors';
import {detectTouch} from '../../config/const';
import {EyeIcon, EyeSlashIcon} from '../../constants/all-svgs';
import AppText from '../app-text';

type inputType = {
  editable?: boolean;
  placeHolderColor?: string;
  SuffixIcon?: React.FC<SvgProps>;
  iconPressable?: boolean;
  iconOnPress?: () => void;
  placeHolder: string;
  value: string;
  onChangeText?: (text: string) => void;
  contentContainerStyle?: ViewStyle;
  TextInputStyle?: ViewStyle;
  inputFontSize?: TEXT_SIZE_TYPE;
  placeHolderFontSize?: number;
  placeholderTextTransform?: 'lowercase' | 'capitalize' | 'none';
  otherProps?: TextInputProps;
  multiline?: boolean;
  borderColor?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  valSymbol?: string | undefined;
  borderWidth?: number;
} & TextInputProps;

const AppInput: FunctionComponent<inputType> = ({
  editable = true,
  placeHolder = 'Placeholder Title',
  SuffixIcon,
  iconPressable,
  iconOnPress,
  onChangeText,
  value,
  TextInputStyle,
  contentContainerStyle,
  placeHolderColor = colors.black,
  inputFontSize = 16,
  placeHolderFontSize = 12,
  onFocus = () => null,
  onBlur = () => null,
  placeholderTextTransform = 'capitalize',
  multiline = false,
  valSymbol,
  borderColor = colors.grey_light_4,
  borderWidth = 1,
  textContentType,
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showTextInput, setShowTextInput] = useState(!!value);
  const [secureText, setSecureText] = useState(textContentType === 'password');
  const isPasswordText = textContentType === 'password';

  const inputRef = useRef<TextInput>(null);

  const focusedInputfontSize = fontSz(placeHolderFontSize / 1.17);
  const unfocusedInputfontSize = fontSz(placeHolderFontSize);

  const placeholderStyle = useAnimatedStyle(() => {
    if (isFocus)
      return {
        fontSize: withSpring(focusedInputfontSize),
        lineHeight: withSpring(focusedInputfontSize * 1.3),
      };
    return {
      fontSize: withSpring(unfocusedInputfontSize),
      lineHeight: withSpring(unfocusedInputfontSize * 1.3),
    };
  }, [isFocus]);

  return (
    <TouchableOpacity
      style={[
        {
          ...inputStyles.container,
          //   borderColor: isFocus ? colors['grey_dark_4'] : borderColor,
          //   borderWidth: borderWidth,
          opacity: editable ? 1 : 0.5,
        },
        contentContainerStyle,
      ]}
      activeOpacity={1}
      onPress={() => {
        !isFocus && setIsFocus(true);
        !showTextInput && setShowTextInput(true);
        inputRef.current?.focus();
      }}>
      <Animated.Text
        numberOfLines={1}
        style={[
          {
            color: placeHolderColor,
            ...(SuffixIcon && {paddingRight: 30}),
            textTransform: placeholderTextTransform,
          },
          placeholderStyle,
        ]}>
        {placeHolder}
      </Animated.Text>
      {showTextInput && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {valSymbol && (
            <AppText
              text={valSymbol}
              size={inputFontSize}
              weight="SemiBold"
              color={'text_1'}
            />
          )}
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            multiline={multiline}
            allowFontScaling={false}
            onBlur={() => {
              isFocus && setIsFocus(false);
              !value && setShowTextInput(false);
              onBlur();
            }}
            onFocus={() => {
              !isFocus && setIsFocus(true);
              onFocus();
            }}
            secureTextEntry={isPasswordText ? secureText : false}
            editable={editable}
            autoFocus={isFocus}
            style={[
              {
                ...inputStyles.textInput,
                color: colors['grey_dark_3'],
                fontSize: fontSz(inputFontSize),
                lineHeight: fontSz(inputFontSize) * 1.3,
                ...(SuffixIcon && {paddingRight: 30}),
              },
              TextInputStyle,
            ]}
            {...otherProps}
          />
        </View>
      )}
      {isPasswordText ? (
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={inputStyles.iconPosition}>
          {secureText ? <EyeIcon /> : <EyeSlashIcon />}
        </TouchableOpacity>
      ) : (
        <>
          {SuffixIcon && (
            <>
              {iconPressable ? (
                <TouchableOpacity
                  onPress={iconOnPress}
                  hitSlop={detectTouch}
                  style={inputStyles.iconPosition}>
                  {SuffixIcon && <SuffixIcon />}
                </TouchableOpacity>
              ) : (
                <View style={inputStyles.iconPosition}>
                  {SuffixIcon && <SuffixIcon />}
                </View>
              )}
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(65),
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: colors.input,
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    fontWeight: '500',
    flex: 1,
  },
  iconPosition: {
    position: 'absolute',
    right: 16,
  },
});

export default AppInput;