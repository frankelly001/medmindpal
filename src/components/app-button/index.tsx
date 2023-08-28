import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import AppText from '../app-text';
import {appBtnStyles} from './styles';
import {appButtonProps} from './type';

const AppButton: FunctionComponent<appButtonProps> = ({
  text = 'BUTTON',
  textSize = 14,
  readonly,
  style,
  textTransform,
  disabled,
  buttonColor = 'primary_1',
  textColor = 'text_1',
  LeftView,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={readonly ? 1 : 0.7}
      style={[
        appBtnStyles.container,
        style,
        {
          opacity: disabled ? 0.5 : 1,
          backgroundColor: colors[buttonColor],
        },
      ]}
      {...otherProps}>
      {LeftView && LeftView}
      <AppText
        text={text}
        align="center"
        size={textSize}
        weight="SemiBold"
        color={textColor}
        style={{textTransform, flex: 1}}
      />
    </TouchableOpacity>
  );
};

export default AppButton;
