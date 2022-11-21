export const time = (today) => {
  const hour = `0${today.getHours()}`.slice(-2);
  const minute = `0${today.getMinutes()}`.slice(-2);
  const seconds = `0${today.getSeconds()}`.slice(-2);
  return `${hour}:${minute}:${seconds}`;
};
export const hours = (today) => {
  const hour = `0${today.getHours()}`.slice(-2);
  const minute = `0${today.getMinutes()}`.slice(-2);
  return `${hour}:${minute}`;
};
export const date = (today) => {
  return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
};
