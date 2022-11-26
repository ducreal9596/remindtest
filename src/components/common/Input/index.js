import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
const cl = classNames.bind(styles);
const Input = ({
  inputName,
  minvalue,
  messageRequired,
  pattenValue,
  focus,
  messPatn,
  title,
  placeholder,
  messMinLength,
  mesMaxLength,
  maxValue,
  type,
  messDate,
  ipdate,
}) => {
  const { register, errors } = useFormContext();
  return (
    <div className={cl('wrapper')}>
      <label className={cl('label')}>{title}</label>
      <div className={cl('form-group')}>
        <input
          className={cl('input-form')}
          autoFocus={focus}
          placeholder={placeholder}
          type={type}
          name={inputName}
          {...register(inputName, {
            required: messageRequired,
            minLength: { value: minvalue, message: messMinLength },
            maxLength: { value: maxValue, message: mesMaxLength },
            pattern: { value: pattenValue, message: messPatn },
            validate: ipdate ? (value) => value >= ipdate || messDate : null,
          })}
        />
        <p className={cl('error')}>
          <ErrorMessage errors={errors} name={inputName} />
        </p>
      </div>
    </div>
  );
};
export default Input;
