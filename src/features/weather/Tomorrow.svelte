<script>
  import WeatherCard from '../../components/WeatherCard.svelte';
  import ImageCard from '../../components/ImageCard.svelte';
  import DayWeatherList from '../../components/DayWeatherList.svelte';
  import TempSummary from '../../components/TempSummary.svelte';
  import { convertDateToArray, getIcon } from '../../util';

  export let day;
  export let timezone = 'Asia/Seoul';

  const [date] = convertDateToArray(day.dt, timezone);
  const iconURL = getIcon(day.weather[0].icon);
  const currentTemp = 0;
  const tempMaxMin = [
    Math.floor(day.temp.max),
    Math.floor(day.temp.min),
  ];
</script>

<ImageCard imageName={day.weather[0].icon} />
<WeatherCard
  {date}
  {currentTemp}
  {iconURL}
  {tempMaxMin}
/>
<DayWeatherList
  weatherData={day}
>
  {#if day.rain}
    <li>
      <div>총 강우량</div>
      <div>{day.rain}mm</div>
    </li>
  {/if}
  {#if day.snow}
    <li>
      <div>총 강설량</div>
      <div>{day.snow}mm</div>
    </li>
  {/if}
</DayWeatherList>
<TempSummary
  daySummary={day.temp}
/>
