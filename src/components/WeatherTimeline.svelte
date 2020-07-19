<script>
  import { convertDateToHour, getIcon, convertDate } from '../util';
  export let hourly;
  export let timezone;
</script>

<h2 class='headline'>시간별 예보</h2>
<ul class='timeline'>
  {#each hourly as { dt, weather, temp, rain }, idx}
    <li>
      <span
        class='time'
        class:next-day={convertDateToHour(dt, timezone) === '12am' || idx === 0}
      >
        {#if convertDateToHour(dt, timezone) === '12am' || idx === 0}
          <span class='date'>{convertDate(dt, timezone)}</span>
        {/if}
        <span>{convertDateToHour(dt, timezone)}</span>
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
    padding: 15px 0;
    overflow-x: scroll;
  }
  .timeline > li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2px;
    padding-top: 15px;
    font-weight: 600;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .time {
    font-size: 12px;
    text-align: center;
  }
  .rain {
    font-size: 10px;
  }
  .next-day {
    color: #0091ce;
  }
  .date {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
