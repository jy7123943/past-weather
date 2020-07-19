import moment from 'moment-timezone';

export const convertDateToArray = (dt, timezone) => (
  moment(dt * 1000).tz(timezone).format('MM/DD h:mma').split(' ')
);

export const convertDateToHour = (dt, timezone) => (
  moment(dt * 1000).tz(timezone).format('ha')
);

export const convertDate = (dt, timezone) => (
  moment(dt * 1000).tz(timezone).format('M/D')
);

export const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const getYesterdayTimestamp = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  return (today.getTime() / 1000).toFixed(0);
};
