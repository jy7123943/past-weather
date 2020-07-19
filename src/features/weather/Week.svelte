<script>
  import { convertDay, convertDate, getIcon } from '../../util';
  export let daily;
  export let timezone;
</script>

<ul>
  {#each daily as item}
    <li>
      <div class='dt'>
        <span class='day'>{convertDay(item.dt, timezone)}</span>
        <span class='date'>{convertDate(item.dt, timezone)}</span>
      </div>
      <img
        src={getIcon(item.weather[0].icon)}
        alt={item.weather[0].description}
      />
      <div class='temp'>
        {Math.floor(item.temp.max)}° /
        {Math.floor(item.temp.min)}°
        {#if item.rain}
          <div class='rain'>
            (강수: {item.rain.toFixed(1)}mm)
          </div>
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dt {
    display: flex;
    align-items: center;
    color: #999;
  }
  .day {
    margin-right: 5px;
    font-weight: 600;
    font-size: 16px;
    color: #666;
  }
  .date, .rain {
    font-size: 12px;
  }
  img {
    width: 65px;
    height: 65px;
  }
  .temp {
    font-size: 20px;
    font-weight: 600;
  }
  .rain {
    margin-top: 2px;
    text-align: right;
    font-weight: 400;
  }
</style>
