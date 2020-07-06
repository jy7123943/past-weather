<script>
  import { beforeUpdate } from 'svelte';
  import { get } from 'svelte/store';
  import { Router, Link, Route } from 'svelte-routing';
  import geolocationStore from '../../store/geolocation.js';
  import Navigator from './Navigator.svelte';
  import Header from './Header.svelte';
  import Today from '../today/Today.svelte';
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

<main>
  <Header />
  {#if $geolocationStore.fetchState !== 'LOADING'}
    {#await weatherPromise}
      <div>Loading...</div>
    {:then { current, hourly, daily, timezone, timezone_offset }}
      <Router url='{ url }'>
        <div>
          <Route path='/yesterday'>
            <div>어제</div>
          </Route>
          <Route path='/tomorrow'>
            <div>내일</div>
          </Route>
          <Route path='/week'>
            <div>일주일</div>
          </Route>
          <Route path='/'>
            <Today
              {current}
              {hourly}
              {timezone}
              timeOffset={timezone_offset}
            />
          </Route>
        </div>
        <Navigator />
      </Router>
    {/await}
  {/if}
</main>

<style>
  
</style>
