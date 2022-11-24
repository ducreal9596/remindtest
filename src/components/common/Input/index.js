import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';
const cl = classNames.bind(styles);
const Input = ({ inputName, focus, validate, type, title, placeholder, inputValue, onHandleChange }) => {
  return (
    <div className={cl('wrapper')}>
      <label className={cl('label')}>{title}</label>
      <div className={cl('form-group')}>
        <input
          className={cl('input-form')}
          autoFocus={focus}
          type={type}
          placeholder={placeholder}
          onChange={onHandleChange}
          value={inputValue}
          name={inputName}
        />
        <p className={cl('error')}>{validate}</p>
      </div>
    </div>
  );
};

export default Input;
