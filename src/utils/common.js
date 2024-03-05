import format from 'date-fns/format';

export const dateFormat = (date) => {
  return format(date, 'dd/MM/yyyy');
};

export const convertDateTimeToArray = (dateTimeString) => {
  const dateObject = new Date(dateTimeString);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  return [hours, minutes];
};
