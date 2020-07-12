<script>
  export let weatherData;
</script>

<ul class='list'>
  <slot name='minMax' />
  <li>
    <div>체감 온도</div>
    <div>{weatherData.feels_like.toFixed(1)}°C</div>
  </li>
  <li>
    <div>습도</div>
    <div>{weatherData.humidity}%</div>
  </li>
  <slot />
  <li>
    <div>구름</div>
    <div>{weatherData.clouds}%</div>
  </li>
  <li>
    <div>바람</div>
    <div>{weatherData.wind_speed}m/s</div>
  </li>
</ul>

<style>
  .list {
    padding: 0 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    margin-top: 10px;
  }

  :global(.list > li > div:first-child) {
    font-weight: 600;
    margin-bottom: 5px;
  }
</style>
