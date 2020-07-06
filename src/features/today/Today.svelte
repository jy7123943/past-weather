<script>
  import moment from 'moment-timezone';
  import Container from '../../components/Container.svelte';
  export let current;
  export let hourly;
  export let timezone = 'Asia/Seoul';
  console.log('hourly', hourly);
  console.log('current', current);

  const convertDate = (dt) => {
    return moment(dt * 1000).tz(timezone).format('YYYY MM DD HH:mm');
  };
// clouds: 75
// dew_point: 17.58
// dt: 1594038688
// feels_like: 26.8
// humidity: 61
// pressure: 1000
// sunrise: 1593980210
// sunset: 1594032987
// temp: 25.66
// uvi: 9.15
// visibility: 10000
// weather: [{id: 803, main: "Clouds", description: "튼구름", icon: "04n"}]
// wind_deg: 269
// wind_speed: 2.1
</script>

<Container>
  <div>{convertDate(current.dt)}</div>
</Container>
