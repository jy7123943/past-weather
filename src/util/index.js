import moment from 'moment-timezone';

moment.tz.setDefault('Asia/Seoul');
moment.locale('ko', {
  weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_일요일'.split('_'),
  weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
});

export const convertDateToArray = (dt, timezone) => (
  moment(dt * 1000).tz(timezone).format('MM/DD h:mma').split(' ')
);

export const convertDateToHour = (dt, timezone) => (
  moment(dt * 1000).tz(timezone).format('ha')
);

export const convertDate = (dt, timezone) => (
  moment(dt * 1000).tz(timezone).format('M/D')
);

export const convertDay = (dt, timezone) => (
  moment(dt * 1000).locale('ko').tz(timezone).format('ddd')
);

export const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const getYesterdayTimestamp = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  return (today.getTime() / 1000).toFixed(0);
};
