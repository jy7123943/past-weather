<script>
  import { convertDateToArray, getIcon } from '../util';
  import ImageCard from './ImageCard.svelte';

  export let weatherData;

  const dateList = convertDateToArray(weatherData.dt, weatherData.timezone);
</script>

<ImageCard imageName={weatherData.weather[0].icon} />
<div class='section'>
  <div class='date'>
    <div
      class='icon'
      style='background-image: url({getIcon(weatherData.weather[0].icon)})'
    />
    {#each dateList as date}
      <p>{date}</p>
    {/each}
  </div>
  <div class='temp'>
    <span>{weatherData.temp.toFixed(1)}</span>
    <span class='unit'>°C</span>
  </div>
</div>
<ul class='list'>
  <li>
    <div>Max/Min</div>
    <div>
      {weatherData.day.max.toFixed(1)}°C /
      {weatherData.day.min.toFixed(1)}°C
    </div>
  </li>
  <li>
    <div>Feels Like</div>
    <div>{weatherData.feels_like.toFixed(1)}°C</div>
  </li>
  <li>
    <div>Humidity</div>
    <div>{weatherData.humidity}%</div>
  </li>
  {#if weatherData.rain}
    <li>
      <div>Rain</div>
      <div>{weatherData.rain}mm</div>
    </li>
  {/if}
  {#if weatherData.snow}
    <li>
      <div>Snow</div>
      <div>{weatherData.snow}mm</div>
    </li>
  {/if}
  <li>
    <div>Clouds</div>
    <div>{weatherData.clouds}%</div>
  </li>
  <li>
    <div>Wind</div>
    <div>{weatherData.wind_speed}m/s</div>
  </li>
</ul>

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
  .list {
    padding: 0 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    margin-top: 10px;
  }
  .list > li > div:first-child {
    font-weight: 600;
    margin-bottom: 5px;
  }
</style>
