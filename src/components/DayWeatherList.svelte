<script>
  export let weatherData;
</script>

<ul class='list'>
  <slot name='minMax' />
  <slot name='feelsLike' />
  <slot />
  <li>
    <div>습도</div>
    <div>{weatherData.humidity}%</div>
  </li>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 18px;
    margin-top: 5px;
    padding: 15px 20px;
    border-radius: 10px;
    background: #f1f2f3;
  }

  :global(.list > li > div:first-child) {
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 14px;
    color: #999;
  }
  :global(.list > li > div:nth-child(2)) {
    font-size: 25px;
  }
</style>
