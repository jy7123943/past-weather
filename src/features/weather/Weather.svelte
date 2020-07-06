<script>
  import Container from '../../components/Container.svelte';
  import geolocationStore from '../../store/geolocation.js';
  import { getWeatherData } from '../../api';

  console.log($geolocationStore)
  // const weatherPromise = getWeatherData();
</script>

<Container>
  <!-- {#await weatherPromise}

  {:then weather}

  {/await}
  weather -->
  weather
</Container>
