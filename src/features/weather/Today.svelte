<script>
  import { convertDateToArray, getIcon } from '../../util';
  import Container from '../../components/Container.svelte';
  import WeatherCard from '../../components/WeatherCard.svelte';

  export let current;
  export let hourly;
  export let day;
  export let timezone;

  const weatherData = {
    ...current,
    timezone,
    day: day.temp,
    rain: current.rain ? current.rain['1h'] : day.rain,
    snow: current.snow ? current.snow['1h'] : day.snow
  };
  console.log('current', current);
  console.log('day', day);
</script>

<Container>
  <WeatherCard {weatherData} />
</Container>
