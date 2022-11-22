import React, { useState } from 'react';
import styles from './Alert.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/button';
const cl = classNames.bind(styles);

const Alert = ({ title, onClose }) => {
  return (
    <div className={cl('wrapper')}>
      <h2 className={cl('title')}> Hôm nay là: {title} nghe bòa dòa</h2>
      <audio
        autoPlay={true}
        loop={true}
        src="https://nhacchuong123.com/nhac-chuong/nhac-dong-vat/Nhac%20Chuong%20Tieng%20Vit%20Keu.mp3"
      />
      <Button close onHandle={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    </div>
  );
};

export default Alert;
