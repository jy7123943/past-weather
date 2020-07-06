<script>
  import Container from '../../components/Container.svelte';
  export let current;
  export let hourly;
  console.log('hourly', hourly);
  console.log('current', current);

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
  <div>Weather</div>
</Container>
