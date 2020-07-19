<script>
  export let daySummary;
</script>

<h2 class='headline'>날씨 요약</h2>
<ul>
  <li>
    <span>아침</span>
    <span>{Math.floor(daySummary.morn)}°</span>
  </li>
  <li>
    <span>낮</span>
    <span>{Math.floor(daySummary.day)}°</span>
  </li>
  <li>
    <span>저녁</span>
    <span>{Math.floor(daySummary.eve)}°</span>
  </li>
  <li>
    <span>밤</span>
    <span>{Math.floor(daySummary.night)}°</span>
  </li>
</ul>

<style>
  ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 30px 0 15px;
  }
  ul:after, ul > li:before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: #0091ce;
    border-radius: 5px;
  }
  ul > li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
  }
  ul > li:before {
    top: -15px;
    left: 50%;
    width: 3px;
    height: 10px;
  }
  span:first-child {
    margin-bottom: 5px;
    font-size: 12px;
    color: #0091ce;
  }
</style>
