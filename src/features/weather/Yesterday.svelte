<script>
  import WeatherCard from '../../components/WeatherCard.svelte';
  import ImageCard from '../../components/ImageCard.svelte';
  import DayWeatherList from '../../components/DayWeatherList.svelte';
  import WeatherTimeline from '../../components/WeatherTimeline.svelte';
  import TempSummary from '../../components/TempSummary.svelte';
  import { convertDateToArray, getIcon } from '../../util';

  export let current;
  export let hourly;
  export let timezone = 'Asia/Seoul';

  const [date, time] = convertDateToArray(current.dt, timezone);
  const currentTemp = Math.floor(current.temp);
  const iconURL = getIcon(current.weather[0].icon);
</script>

<ImageCard imageName={current.weather[0].icon} />
<WeatherCard
  {date}
  {time}
  {currentTemp}
  {iconURL}
/>
<DayWeatherList
  weatherData={current}
>
  <li slot='feelsLike'>
    <div>체감 온도</div>
    <div>
      {Math.floor(current.feels_like)}°
    </div>
  </li>
  {#if current.rain}
    <li>
      <div>강우량</div>
      <div>{current.rain['1h']}mm</div>
    </li>
  {/if}
  {#if current.snow}
    <li>
      <div>강설량</div>
      <div>{current.snow['1h']}mm</div>
    </li>
  {/if}
</DayWeatherList>
<WeatherTimeline
  {hourly}
  {timezone}
/>
