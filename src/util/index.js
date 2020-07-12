import moment from 'moment-timezone';

export const convertDateToArray = (dt, timezone) => {
  return moment(dt * 1000).tz(timezone).format('MM/DD HH:mma').split(' ');
};

export const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
