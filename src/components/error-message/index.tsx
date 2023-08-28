import React, {FunctionComponent} from 'react';
import AppText from '../app-text';
import {errorMsgProps} from './type';

const ErrorMessage: FunctionComponent<errorMsgProps> = ({
  error,
  message,
  align,
}) => {
  if (!error) return null;

  return (
    <AppText
      text={message}
      weight="Regular"
      size={10}
      color="error_1"
      align={align}
      capitalize={false}
      style={{paddingHorizontal: 16}}
    />
  );
};

export default ErrorMessage;
