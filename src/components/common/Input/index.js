import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';
const cl = classNames.bind(styles);
const Input = ({ focus, validate, type, title, placeholder, inputValue, onHandleChange, children }) => {
  return (
    <div className={cl('wrapper')}>
      <label className={cl('label')}>{title}</label>
      <div className={cl('form-group')}>
        <input
          autoFocus={focus}
          type={type}
          placeholder={placeholder}
          onChange={onHandleChange}
          ref={children}
          value={inputValue}
        />
        <p className={cl('error')}>{validate}</p>
      </div>
    </div>
  );
};

export default Input;
