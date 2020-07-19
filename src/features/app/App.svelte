<script>
  import { beforeUpdate } from 'svelte';
  import { get } from 'svelte/store';
  import { Router, Link, Route } from 'svelte-routing';
  import geolocationStore from '../../store/geolocation.js';
  import Navigator from './Navigator.svelte';
  import Header from './Header.svelte';
  import Today from '../weather/Today.svelte';
  import Tomorrow from '../weather/Tomorrow.svelte';
  import Container from '../../components/Container.svelte';
  import { getWeatherData } from '../../api';

  export let url = '';
  let weatherPromise;

  beforeUpdate(() => {
    const { location } = get(geolocationStore);

    if (!location) return;

    weatherPromise = getWeatherData(
      location.latitude,
      location.longitude
    );
  });
</script>

<Container>
  <Header />
  {#if $geolocationStore.fetchState !== 'LOADING'}
    {#await weatherPromise}
      <div>Loading...</div>
    {:then { current, hourly, daily, timezone }}
      <Router url='{ url }'>
        <div>
          <Route path='/yesterday'>
            <div>어제</div>
          </Route>
          <Route path='/tomorrow'>
            <Tomorrow
              day={daily[1]}
              {timezone}
            />
          </Route>
          <Route path='/week'>
            <div>일주일</div>
          </Route>
          <Route path='/'>
            <Today
              {current}
              day={daily[0]}
              {hourly}
              {timezone}
            />
          </Route>
        </div>
        <Navigator />
      </Router>
    {:catch error}
      <div>Error!</div>
    {/await}
  {/if}
</Container>

<style>
  
</style>
