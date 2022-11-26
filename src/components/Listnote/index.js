import React from 'react';
import styles from './Listnote.module.scss';
import classNames from 'classnames/bind';
import NoteCart from '../NoteCart';
import { useSelector } from 'react-redux';
const cl = classNames.bind(styles);
ListNote.propTypes = {};
function ListNote() {
  const data = useSelector((state) => state.noteList);
  return (
    <div className={cl('note-list')}>
      {data.length > 0 ? (
        data.map((item, index) => {
          return <NoteCart key={index} item={item} index={index} />;
        })
      ) : (
        <h2 className={cl('empty')}>List note empty</h2>
      )}
    </div>
  );
}

export default ListNote;
