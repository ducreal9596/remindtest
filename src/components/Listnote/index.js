import React, { useContext, useEffect, useState } from 'react';
import styles from './Listnote.module.scss';
import classNames from 'classnames/bind';
import NoteCart, { loadtContext } from '../NoteCart';
import { LoadData } from '../AddNote';
const cl = classNames.bind(styles);

ListNote.propTypes = {};

function ListNote({ active }) {
  const [data, setData] = useState([]);
  const change = useContext(LoadData);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('task'));
    if (data) {
      setData(data.task);
    }
  }, [change]);
  return (
    <div className={cl('note-list')}>
      {data.length > 0 ? (
        data.map((item, index) => {
          return <NoteCart active={active} key={index} item={item} index={index} />;
        })
      ) : (
        <h2 className={cl('empty')}>List note empty</h2>
      )}
    </div>
  );
}

export default ListNote;
