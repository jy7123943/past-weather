<script>
  export let date;
  export let time;
  export let currentTemp;
  export let iconURL;
  export let tempMaxMin;
</script>

<div class='section'>
  <div class='date'>
    {#if iconURL}
      <div
        class='icon'
        style='background-image: url({iconURL})'
      />
    {/if}
    {#if date}
      <p>{date}</p>
    {/if}
    {#if time}
      <p class='time'>{time}</p>
    {/if}
  </div>
  <div class='temp'>
    {#if currentTemp}
      <span>{currentTemp}</span>
      <span class='unit'>°</span>
    {:else if tempMaxMin}
      <span>{tempMaxMin[0]}</span>
      <span class='unit'></span>/
      <span>{tempMaxMin[1]}</span>
      <span class='unit'>°</span>
    {/if}
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
    color: #3ec6ff;
  }
  .temp .unit {
    margin-top: 6px;
    font-size: 40px;
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
  .date .time {
    margin-left: 10px;
    font-size: 14px;
  }
</style>
