import React, { createContext, useState } from 'react';
import styles from './NoteCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '../common/button';
const cl = classNames.bind(styles);
const data = JSON.parse(localStorage.getItem('task')) ?? [];
export const loadtContext = createContext();
const NoteCart = ({ item, index, active }) => {
  const [isload, setIsload] = useState(false);
  const handleDelete = (id) => {
    data.task.splice(id, 1);
    localStorage.setItem('task', JSON.stringify(data));
    setIsload(true);
    window.location.reload();
  };
  return (
    <loadtContext.Provider value={isload}>
      <div className={cl('note-cart', active)}>
        <div className={cl('note')}>
          <span className={cl('date-note')}>Ngày: {item.day}</span>
          <span>
            <Button del onHandle={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </Button>
          </span>
        </div>
        <span>{item.title}</span>
      </div>
    </loadtContext.Provider>
  );
};

export default NoteCart;
