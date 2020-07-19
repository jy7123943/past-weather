<script>
  import { convertDateToHour, getIcon } from '../util';
  export let hourly;
  export let timezone;
</script>

<ul class='timeline'>
  {#each hourly as { dt, weather, temp, rain}}
    <li>
      <span class='time' class:next-day={convertDateToHour(dt, timezone) === '12am'}>
        {convertDateToHour(dt, timezone)}
      </span>
      <img
        src={getIcon(weather[0].icon)}
        alt={weather[0].description}
      />
      <span class='temp'>{Math.floor(temp)}°</span>
      {#if rain}
        <span class='rain'>{rain['1h'].toFixed(1)}mm</span>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .timeline {
    display: flex;
    max-width: 100%;
    padding: 50px 0 20px;
    overflow-x: scroll;
  }
  .timeline > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2px;
    font-weight: 600;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .time {
    font-size: 12px;
  }
  .rain {
    font-size: 10px;
  }
  .next-day {
    color: #0091ce;
  }
</style>
