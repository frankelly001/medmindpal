import {logThis} from './logThis';

export const debugPrint = (label?: any, value?: any) => {
  if (process.env.NODE_ENV === 'development') {
    if (value === undefined || value === null) {
      logThis(label);
      return;
    }
    logThis(label, value);
  }
};
