import {useState} from 'react';
import {AnyObjectSchema, ObjectSchema} from 'yup';
import {fieldValidation} from '../helpers/fieldValidation';
import {validate} from '../helpers/validate';

export const useFormValidation = (validationSchema: AnyObjectSchema) => {
  const [errors, setErrors] = useState<{[key in string]: any} | null>(null);

  const validateField = async ({
    values,
    field,
  }: {
    values: {[key in string]: any};
    field: string;
    initialize?: boolean;
  }) => {
    const fieldsError = await fieldValidation({
      field,
      validationSchema,
      values,
    });
    setErrors(ers => {
      return fieldsError
        ? {
            ...(ers || {}),
            [field]: fieldsError[field],
          }
        : null;
    });
    return fieldsError;
  };

  const isValid = async (values: {[key: string]: string}) => {
    const errs = await validate(validationSchema, values);
    setErrors(errs);
    return !errs;
  };

  return {errors, validateField, isValid};
};
