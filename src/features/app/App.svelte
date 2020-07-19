<script>
  import { beforeUpdate } from 'svelte';
  import { get } from 'svelte/store';
  import { Router, Link, Route } from 'svelte-routing';
  import geolocationStore from '../../store/geolocation.js';
  import Navigator from './Navigator.svelte';
  import Header from './Header.svelte';
  import Today from '../weather/Today.svelte';
  import Tomorrow from '../weather/Tomorrow.svelte';
  import Yesterday from '../weather/Yesterday.svelte';
  import Week from '../weather/Week.svelte';
  import Container from '../../components/Container.svelte';
  import Loader from '../../components/Loader.svelte';
  import Error from '../../components/Error.svelte';
  import { getWeatherData, getHistoricalWeatherData } from '../../api';
  import { getYesterdayTimestamp } from '../../util';

  export let url = '';
  let weatherPromise;

  beforeUpdate(() => {
    const { location } = get(geolocationStore);

    if (!location) return;

    weatherPromise = Promise.all([
      getWeatherData(
        location.latitude,
        location.longitude
      ),
      getHistoricalWeatherData(
        location.latitude,
        location.longitude,
        getYesterdayTimestamp(),
      )
    ]);
  });
</script>

<Container>
  <Header />
  {#if $geolocationStore.fetchState !== 'LOADING'}
    {#await weatherPromise}
      <Loader />
    {:then [today, yesterday]}
      <Router url='{ url }'>
        <div>
          <Route path='/yesterday'>
            <Yesterday
              current={yesterday.current}
              hourly={yesterday.hourly}
              timezone={yesterday.timezone}
            />
          </Route>
          <Route path='/tomorrow'>
            <Tomorrow
              day={today.daily[1]}
              timezone={today.timezone}
            />
          </Route>
          <Route path='/week'>
            <Week
              daily={today.daily}
              timezone={today.timezone}
            />
          </Route>
          <Route path='/'>
            <Today
              current={today.current}
              day={today.daily[0]}
              hourly={today.hourly}
              timezone={today.timezone}
            />
          </Route>
        </div>
        <Navigator />
      </Router>
    {:catch error}
      <Error />
    {/await}
  {/if}
</Container>
