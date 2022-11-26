import React from 'react';
import styles from './AddNote.module.scss';
import classNames from 'classnames/bind';
import Input from '../common/Input';
import Button from '../common/button';
import { date, hours } from '../../constants/time';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { addNoteSlice } from './NoteSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
const cl = classNames.bind(styles);
const newDay = new Date();
const AddNote = () => {
  const negative = useNavigate();
  const task = useSelector((state) => state.noteList);
  localStorage.setItem('task', JSON.stringify(task));
  const { idx } = useParams();
  const isAddNote = !idx;
  const valueUpdate = useSelector((state) => state.noteList.find((note) => note.id === idx));
  const dispatch = useDispatch();
  const initValue = isAddNote
    ? {
        title: '',
        day: '',
        hour: '',
      }
    : valueUpdate;
  const formMethod = useForm({
    defaultValues: initValue,
  });
  const { handleSubmit, reset } = formMethod;
  // const [form, setForm] = useState({
  //   title: '',
  //   day: '',
  //   hour: '',
  // });
  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  //   setValidate('');
  // };
  // const handleSubmit = () => {
  //   if (form.title === '') {
  //     setValidate({ content: '* Nhập nội dung đi bòa dòa' });
  //     return;
  //   } else if (form.title.length < 5) {
  //     setValidate({ content: '* Nội dung ít nhất 5 chữ nghe' });
  //     return;
  //   } else if (form.title.length >= 80) {
  //     setValidate({ content: '* Nhập chi mà dài rứa ông dòa' });
  //     return;
  //   }
  //   if (form.day === '') {
  //     setValidate({ time: '* Nhập ngày giờ đi bòa dòa' });
  //     return;
  //   }
  //   if (form.day < date(newDay)) {
  //     setValidate({ time: '* Đừng nhập time quá khứ nghe bòa dòa' });
  //     return;
  //   }
  //   if ((form.day <= date(newDay) && form.hour < hours(newDay)) || form.hour === '') {
  //     setValidate({ hour: '* Nhập đúng time đi bòa dòa' });
  //     return;
  //   } else {
  //     dispatch(addNote(form));
  //     window.location.reload();
  //   }
  // };
  const onSumit = (data) => {
    if (isAddNote) {
      dispatch(addNoteSlice.actions.addNote({ ...data, id: uuidv4() }));
    } else {
      dispatch(addNoteSlice.actions.updateNote(data));
      const path = `/remindtest`;
      negative(path);
      window.location.reload();
    }
  };
  return (
    <FormProvider {...formMethod}>
      <form className={cl('wrapper')} onSubmit={handleSubmit(onSumit)}>
        <div className={cl('input')}>
          <Input
            focus
            inputName="title"
            title="Nội dung:"
            placeholder="Khai mạc worldcup 2022"
            minvalue={5}
            maxValue={80}
            messageRequired="* Nhập nội dung đi bòa dòa"
            messMinLength="* Nội dung ít nhất 5 chữ nghe"
            mesMaxLength="* Nhập chi mà dài rứa ông dòa"
          />
          <Input
            inputName="day"
            ipdate={date(newDay)}
            messDate="* Đừng nhập time quá khứ nghe bòa dòa"
            title="Ngày nhắc:"
            type="date"
            messageRequired="* Nhập ngày giờ đi bòa dòa"
          />
          <Input
            ipdate={hours(newDay)}
            inputName="hour"
            title="Thời gian:"
            messageRequired="* Nhập đúng time đi bòa dòa"
            placeholder="21:00"
          />
        </div>
        <div className={cl('save')}>
          <Button save type="submit">
            {isAddNote ? 'Save Note' : 'Update Note'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddNote;
