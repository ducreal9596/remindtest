import React, { createContext, useReducer, useState } from 'react';
import styles from './AddNote.module.scss';
import classNames from 'classnames/bind';
import Input from '../common/Input';
import Button from '../common/button';
import { date, hours } from '../../constants/time';
const cl = classNames.bind(styles);
const data = JSON.parse(localStorage.getItem('task'));
const initState = {
  title: '',
  day: '',
  hour: '',
  task: data === null ? [] : data.task,
};
const newDay = new Date();
const SET_TITLE = 'set_title';
const SET_DAY = 'set_day';
const SET_HOUR = 'set_hour';
const ADD_TASK = 'add_task';
const setTitle = (payload) => {
  return {
    type: SET_TITLE,
    payload: payload,
  };
};
const setDay = (payload) => {
  return {
    type: SET_DAY,
    payload: payload,
  };
};
const setHour = (payload) => {
  return {
    type: SET_HOUR,
    payload: payload,
  };
};
const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
let newState;
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      newState = { ...state, title: action.payload };
      break;
    case SET_DAY:
      newState = { ...state, day: action.payload };
      break;
    case SET_HOUR:
      newState = { ...state, hour: action.payload };
      break;
    case ADD_TASK:
      newState = { task: [...state.task, action.payload] };
      localStorage.setItem('task', JSON.stringify(newState));
      break;
    default:
      throw new Error('action invalid');
  }
  return newState;
};
export const LoadData = createContext();
const AddNote = () => {
  const [validate, setValidate] = useState({});
  const [haha, setHaha] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);
  const { title, day, hour } = state;
  const handleSubmit = () => {
    if (title === '') {
      setValidate({ content: '* Nhập nội dung đi bòa dòa' });
      return;
    } else if (title.length < 5) {
      setValidate({ content: '* Nội dung ít nhất 5 chữ nghe' });
      return;
    } else if (title.length >= 80) {
      setValidate({ content: '* Nhập chi mà dài rứa ông dòa' });
      return;
    }
    if (day === '') {
      setValidate({ time: '* Nhập ngày giờ đi bòa dòa' });
      return;
    }
    if (day < date(newDay)) {
      setValidate({ time: '* Đừng nhập time quá khứ nghe bòa dòa' });
      return;
    }
    if ((day <= date(newDay) && hour < hours(newDay)) || hour === '') {
      setValidate({ hour: '* Nhập đúng time đi bòa dòa' });
      return;
    } else {
      dispatch(addTask({ title, day, hour }));
      setHaha((prev) => prev + 1);
      window.location.reload();
    }
  };
  return (
    <LoadData.Provider value={haha}>
      <div className={cl('wrapper')}>
        <div className={cl('input')}>
          <Input
            focus
            title="Nội dung:"
            validate={validate.content}
            placeholder="Khai mạc worldcup 2022"
            inputValue={title}
            onHandleChange={(e) => dispatch(setTitle(e.target.value), setValidate(''))}
          />
          <Input
            title="Ngày nhắc:"
            type="date"
            validate={validate.time}
            inputValue={day}
            onHandleChange={(e) => dispatch(setDay(e.target.value), setValidate(''))}
          />
          <Input
            validate={validate.hour}
            title="Thời gian:"
            inputValue={hour}
            placeholder="21:00"
            onHandleChange={(e) => dispatch(setHour(e.target.value))}
          />
        </div>
        <div className={cl('save')}>
          <Button save onHandle={handleSubmit}>
            Save Note
          </Button>
        </div>
      </div>
    </LoadData.Provider>
  );
};

export default AddNote;
