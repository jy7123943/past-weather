<script>
  import { convertDateToArray, getIcon } from '../util';

  export let date;
  export let time;
  export let currentTemp;
  export let iconURL;
</script>

<div class='section'>
  <div class='date'>
    <div
      class='icon'
      style='background-image: url({iconURL})'
    />
    <p>{date}</p>
    <p>{time}</p>
  </div>
  <div class='temp'>
    <span>{currentTemp}</span>
    <span class='unit'>°C</span>
  </div>
</div>

<style>
  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 8px 10px 0px;
    font-size: 16px;
    text-align: left;
  }
  .section > div {
    flex: 1;
  }
  .section .temp {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    font-size: 54px;
    font-weight: 700;
    color: #ffde2a;
  }
  .temp .unit {
    margin-top: 6px;
    font-size: 25px;
  }
  .date {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #999;
  }
  .date .icon {
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .date > *:last-child {
    margin-left: 10px;
    font-size: 14px;
  }
</style>
