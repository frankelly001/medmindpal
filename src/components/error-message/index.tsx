import React, {FunctionComponent} from 'react';
import AppText from '../app-text';

const ErrorMessage: FunctionComponent<{
  error?: boolean;
  message?: string;
}> = ({error, message}) => {
  if (!error) return null;

  return (
    <AppText
      text={message}
      weight="Regular"
      size={10}
      color="error_1"
      capitalize={false}
      style={{paddingHorizontal: 16}}
    />
  );
};

export default ErrorMessage;
