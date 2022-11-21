import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cl = classNames.bind(styles);

const Button = ({ children, onHandle, save, del, close }) => {
  const classes = {
    save,
    del,
    close,
  };
  return (
    <div>
      <button className={cl('wrapper', classes)} onClick={onHandle}>
        {children}
      </button>
    </div>
  );
};

export default Button;
