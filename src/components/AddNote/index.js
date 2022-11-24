import React, { useState } from 'react';
import styles from './AddNote.module.scss';
import classNames from 'classnames/bind';
import Input from '../common/Input';
import Button from '../common/button';
import { date, hours } from '../../constants/time';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../redux/actions';
const cl = classNames.bind(styles);

const newDay = new Date();
const AddNote = () => {
  const [validate, setValidate] = useState({});
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: '',
    day: '',
    hour: '',
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValidate('');
  };
  const task = useSelector((state) => state.task);
  localStorage.setItem('task', JSON.stringify(task));

  const handleSubmit = () => {
    if (form.title === '') {
      setValidate({ content: '* Nhập nội dung đi bòa dòa' });
      return;
    } else if (form.title.length < 5) {
      setValidate({ content: '* Nội dung ít nhất 5 chữ nghe' });
      return;
    } else if (form.title.length >= 80) {
      setValidate({ content: '* Nhập chi mà dài rứa ông dòa' });
      return;
    }
    if (form.day === '') {
      setValidate({ time: '* Nhập ngày giờ đi bòa dòa' });
      return;
    }
    if (form.day < date(newDay)) {
      setValidate({ time: '* Đừng nhập time quá khứ nghe bòa dòa' });
      return;
    }
    if ((form.day <= date(newDay) && form.hour < hours(newDay)) || form.hour === '') {
      setValidate({ hour: '* Nhập đúng time đi bòa dòa' });
      return;
    } else {
      dispatch(addNote(form));
      window.location.reload();
    }
  };
  return (
    <div className={cl('wrapper')}>
      <div className={cl('input')}>
        <Input
          focus
          inputName="title"
          title="Nội dung:"
          validate={validate.content}
          placeholder="Khai mạc worldcup 2022"
          inputValue={form.title}
          onHandleChange={handleChange}
        />
        <Input
          inputName="day"
          title="Ngày nhắc:"
          type="date"
          validate={validate.time}
          inputValue={form.day}
          onHandleChange={handleChange}
        />
        <Input
          inputName="hour"
          validate={validate.hour}
          title="Thời gian:"
          inputValue={form.hour}
          placeholder="21:00"
          onHandleChange={handleChange}
        />
      </div>
      <div className={cl('save')}>
        <Button save onHandle={handleSubmit}>
          Save Note
        </Button>
      </div>
    </div>
  );
};

export default AddNote;
