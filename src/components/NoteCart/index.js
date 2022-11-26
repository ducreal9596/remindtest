import React, { createContext } from 'react';
import styles from './NoteCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '../common/button';
import { useDispatch, useSelector } from 'react-redux';
import { addNoteSlice } from '../AddNote/NoteSlice';
import { useNavigate, useParams } from 'react-router-dom';
const cl = classNames.bind(styles);
export const loadtContext = createContext();
const NoteCart = ({ item, index }) => {
  const dispatch = useDispatch();
  const negative = useNavigate();
  const { idx } = useParams();
  const data = useSelector((state) => state.noteList);
  const handleDelete = (id) => {
    dispatch(addNoteSlice.actions.removeNote(id));
    localStorage.setItem('task', JSON.stringify(data));
  };
  const handleUpdate = (idx) => {
    negative(`/edit/note/${idx}`);
    window.location.reload();
  };
  return (
    <div className={cl('note-cart', item.active)}>
      <div className={cl('note')}>
        <span className={cl('date-note')}>Ngày: {item.day}</span>
        <span className={cl('btn-edit')}>
          <Button edit onHandle={() => handleUpdate(item.id)}>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          {idx ? (
            <Button del>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </Button>
          ) : (
            <Button del onHandle={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </Button>
          )}
        </span>
      </div>
      <span>{item.title}</span>
    </div>
  );
};

export default NoteCart;
