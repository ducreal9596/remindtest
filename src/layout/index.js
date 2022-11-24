import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import ListNote from '../components/Listnote';
import AddNote from '../components/AddNote';
import { time, date, hours } from '../constants/time';
import Alert from '../components/Alert';
const cl = classNames.bind(styles);

Home.propTypes = {};

function Home() {
  const newDay = new Date();
  const [day, setDay] = useState();
  const [data, setData] = useState(() => {
    const save = JSON.parse(localStorage.getItem('task')) ?? [];
    return save ?? [];
  });
  const [active, setActive] = useState('');
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    setInterval(() => {
      const newDay = new Date();
      setDay(time(newDay));
    }, 1000);
  }, []);
  let note;
  if (data !== []) {
    note = data.filter((item) => item.day === date(newDay));
  }
  let idx = note.findIndex((item) => item.hour === hours(newDay));
  useEffect(() => {
    setTimeout(() => {
      if (idx !== -1) {
        setTitle(note[idx].title);
      }
      if (idx !== -1 && note[idx].hour === hours(newDay)) {
        setShow(true);
        setActive('active');
      } else {
        setShow(false);
        setActive('');
      }
    }, 100);
  }, [idx]);
  const handleClose = () => {
    setShow(false);
    idx = -1;
    setActive('');
  };
  return (
    <div className={cl('wrapper')}>
      {show && <Alert title={title} onClose={handleClose} />}
      <h1 className={cl('title')}>Remind your important day</h1>
      <div className={cl('content')}>
        <AddNote />
        <ListNote active={active} />
      </div>
    </div>
  );
}

export default Home;
